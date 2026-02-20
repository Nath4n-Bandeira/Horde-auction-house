"use client"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

type Inputs = {
    nome: string
    email: string
    senha: string
    confirmarSenha: string
    cidade: string
}

export default function Register() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<Inputs>()    
    const router = useRouter()
    const senha = watch("senha")

    function validaSenha(senha: string): string[] {
        const mensagens: string[] = []

        if (senha.length < 8) {
            mensagens.push("Senha deve possuir, no mínimo, 8 caracteres")
        }

        let pequenas = 0
        let grandes = 0
        let numeros = 0
        let simbolos = 0

        for (const letra of senha) {
            if ((/[a-z]/).test(letra)) {
                pequenas++
            }
            else if ((/[A-Z]/).test(letra)) {
                grandes++
            }
            else if ((/[0-9]/).test(letra)) {
                numeros++
            } else {
                simbolos++
            }
        }

        if (pequenas == 0) {
            mensagens.push("Senha deve possuir letra(s) minúscula(s)")
        }

        if (grandes == 0) {
            mensagens.push("Senha deve possuir letra(s) maiúscula(s)")
        }

        if (numeros == 0) {
            mensagens.push("Senha deve possuir número(s)")
        }

        if (simbolos == 0) {
            mensagens.push("Senha deve possuir símbolo(s)")
        }

        return mensagens
    }

    async function handleRegister(data: Inputs) {
        // Validar se as senhas coincidem
        if (data.senha !== data.confirmarSenha) {
            toast.error("As senhas não coincidem")
            return
        }

        // Validar senha
        const erros = validaSenha(data.senha)
        if (erros.length > 0) {
            toast.error(erros.join("\n"))
            return
        }

        // Validar nome
        if (data.nome.length < 10) {
            toast.error("Nome deve possuir, no mínimo, 10 caracteres")
            return
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/clientes`, {
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify({
                    nome: data.nome,
                    email: data.email,
                    senha: data.senha,
                    cidade: data.cidade
                })
            })

            if (response.status == 201) {
                toast.success("Cadastro realizado com sucesso! Faça login para continuar.")
                setTimeout(() => {
                    router.push("/login")
                }, 1500)
            } else {
                const erro = await response.json()
                toast.error(erro.erro || "Erro ao realizar cadastro")
            }
        } catch (error) {
            toast.error("Erro ao conectar com o servidor")
        }
    }

    return (
        <section className="bg-gray-900 dark:bg-gray-900 min-h-screen">
            <p style={{ height: 48 }}></p>
            <div className="flex flex-col items-center px-6 py-8 mx-auto lg:py-0">
                <div className="fade-gradient-border w-full max-w-md">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-gray-900 rounded">
                        <h1 className="text-xl font-bold leading-tight tracking-tight bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent md:text-2xl">
                            Criar Conta de Cliente
                        </h1>
                        <form className="space-y-4 md:space-y-6" 
                           onSubmit={handleSubmit(handleRegister)} >
                            <div>
                                <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-300">Nome Completo</label>
                                <input type="text" id="nome" 
                                       className="bg-gray-800 border border-gray-600 text-gray-100 rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" 
                                       placeholder="Mínimo 10 caracteres"
                                       required 
                                       {...register("nome", { 
                                           required: "Nome é obrigatório",
                                           minLength: { value: 10, message: "Mínimo 10 caracteres" }
                                       })} />
                                {errors.nome && <p className="text-red-400 text-xs mt-1">{errors.nome.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email</label>
                                <input type="email" id="email" 
                                       className="bg-gray-800 border border-gray-600 text-gray-100 rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" 
                                       placeholder="seu.email@example.com"
                                       required 
                                       {...register("email", { 
                                           required: "Email é obrigatório",
                                           pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" }
                                       })} />
                                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="cidade" className="block mb-2 text-sm font-medium text-gray-300">Cidade</label>
                                <input type="text" id="cidade" 
                                       className="bg-gray-800 border border-gray-600 text-gray-100 rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" 
                                       required 
                                       {...register("cidade", { 
                                           required: "Cidade é obrigatória"
                                       })} />
                                {errors.cidade && <p className="text-red-400 text-xs mt-1">{errors.cidade.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="senha" className="block mb-2 text-sm font-medium text-gray-300">Senha</label>
                                <p className="text-gray-400 text-xs mb-2">
                                    Mínimo 8 caracteres, incluindo: maiúscula, minúscula, número e símbolo
                                </p>
                                <input type="password" id="senha" 
                                       className="bg-gray-800 border border-gray-600 text-gray-100 rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" 
                                       required 
                                       {...register("senha", { 
                                           required: "Senha é obrigatória"
                                       })} />
                                {errors.senha && <p className="text-red-400 text-xs mt-1">{errors.senha.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="confirmarSenha" className="block mb-2 text-sm font-medium text-gray-300">Confirmar Senha</label>
                                <input type="password" id="confirmarSenha" 
                                       className="bg-gray-800 border border-gray-600 text-gray-100 rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" 
                                       required 
                                       {...register("confirmarSenha", { 
                                           required: "Confirmação de senha é obrigatória"
                                       })} />
                                {errors.confirmarSenha && <p className="text-red-400 text-xs mt-1">{errors.confirmarSenha.message}</p>}
                            </div>

                            <button type="submit" className="w-full text-white bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all">
                                Cadastrar
                            </button>
                            <p className="text-sm font-light text-gray-400">
                                Já possui conta? <a href="/login" className="font-medium text-red-400 hover:text-red-300">Faça login</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
