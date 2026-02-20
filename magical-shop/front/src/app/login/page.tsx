"use client"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { useClienteStore } from "@/context/ClienteContext"
import { useRouter } from "next/navigation"

type Inputs = {
    email: string
    senha: string
    manter: boolean
}

export default function Login() {
    const { register, handleSubmit } = useForm<Inputs>()    
    const { logaCliente } = useClienteStore()

    const router = useRouter()

    async function verificaLogin(data: Inputs) {
        // alert(`${data.email} ${data.senha} ${data.manter}`)
        const response = await 
          fetch(`${process.env.NEXT_PUBLIC_URL_API}/clientes/login`, {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify({ email: data.email, senha: data.senha })
          })
        
        if (response.status == 200) {      
            const dados = await response.json()

            logaCliente(dados)
            
            if (data.manter) {
                localStorage.setItem("clienteKey", dados.id)
            } else {
                if (localStorage.getItem("clienteKey")) {
                    localStorage.removeItem("clienteKey")
                }
            }

            router.push("/")
        } else {
            toast.error("Erro... Login ou senha incorretos")
        }
    }

    return (
        <section className="bg-gray-900 dark:bg-gray-900 min-h-screen">
            <p style={{ height: 48 }}></p>
            <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="fade-gradient-border w-full max-w-md">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-gray-900 rounded">
                        <h1 className="text-xl font-bold leading-tight tracking-tight bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent md:text-2xl">
                            Dados de Acesso do Cliente
                        </h1>
                        <form className="space-y-4 md:space-y-6" 
                           onSubmit={handleSubmit(verificaLogin)} >
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Seu e-mail</label>
                                <input type="email" id="email" 
                                       className="bg-gray-800 border border-gray-600 text-gray-100 rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" 
                                       required 
                                       {...register("email")} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300">Senha de Acesso</label>
                                <input type="password" id="password" 
                                       className="bg-gray-800 border border-gray-600 text-gray-100 rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" 
                                       required 
                                       {...register("senha")} />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" 
                                               aria-describedby="remember" type="checkbox" 
                                               className="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-3 focus:ring-red-600" 
                                               {...register("manter")} />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-400">Manter Conectado</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-red-400 hover:text-red-300">Esqueceu sua senha?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all">
                                Entrar
                            </button>
                            <p className="text-sm font-light text-gray-400">
                                Ainda não possui conta? <a href="/register" className="font-medium text-red-400 hover:text-red-300">Cadastre-se</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}