"use client"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from 'sonner'
import { useRouter } from "next/navigation"

import Cookies from 'js-cookie'

type Inputs = {
  email: string
  senha: string
}

export default function Home() {
  const { register, handleSubmit, setFocus } = useForm<Inputs>()
  const router = useRouter()

  useEffect(() => {
    setFocus("email")
  }, [])

  async function verificaLogin(data: Inputs) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/admin/login`, {
      method: "POST",
      headers: {"Content-type": "Application/json"},
      body: JSON.stringify({email: data.email, senha: data.senha})
    })

    if (response.status == 200) {
      const admin = await response.json()

      Cookies.set("admin_logado_id", admin.id)
      Cookies.set("admin_logado_nome", admin.nome)
      Cookies.set("admin_logado_token", admin.token)

      router.push("/principal")      
    } else if (response.status == 400) {
      toast.error("Erro... Login ou senha incorretos")
    } 
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <img src="./dungeonmaster.png" alt="Revenda" style={{ width: 240 }}
        className="d-block mb-6" />
      <div className="max-w-sm fade-gradient-border p-6 bg-gray-900 rounded">
        <h1 className="text-3xl font-bold my-8 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent text-center">A passagem aonde apenas o mestre tem conhecimento</h1>
        <form className="max-w-sm mx-auto"
          onSubmit={handleSubmit(verificaLogin)} >
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">E-mail:</label>
            <input type="email" id="email" className="bg-gray-800 border border-gray-600 text-gray-100 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
              {...register("email")}
              required />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300">Senha:</label>
            <input type="password" id="password" className="bg-gray-800 border border-gray-600 text-gray-100 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
              {...register("senha")}
              required />
          </div>
          <button type="submit" className="text-white bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center transition-all">Entrar</button>
        </form>
      </div>
    </main>
  );
}
