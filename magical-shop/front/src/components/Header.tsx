"use client"
import Link from "next/link"
import { useClienteStore } from "@/context/ClienteContext"
import { useRouter } from "next/navigation"

export function Header() {
    const { cliente, deslogaCliente } = useClienteStore()
    const router = useRouter()

    function clienteSair() {
        if (confirm("Confirma saída do sistema?")) {
            deslogaCliente()
            if (localStorage.getItem("clienteKey")) {
                localStorage.removeItem("clienteKey")
            }
            router.push("/login")
        }
    }

    return (
        <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse hover:opacity-80 transition-opacity">
                    <img src="./horde.png" className="h-12" alt="FOR THE HORRDEEEE" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-100 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
                        Empório magico da Horda
                    </span>
                </Link>
                <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            {cliente.id ?
                                <>
                                    <span className="text-gray-200 font-semibold">
                                        {cliente.nome}
                                    </span>&nbsp;&nbsp;
                                    <Link href="/propostas" className="text-white font-bold bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 focus:ring-2 focus:outline-none focus:ring-gray-500 rounded-lg text-sm w-full sm:w-auto px-3 py-2 text-center transition-all">
                                        Minhas Propostas
                                    </Link>&nbsp;&nbsp;
                                    <span className="cursor-pointer font-bold text-red-400 hover:text-red-300 transition-colors"
                                        onClick={clienteSair}>
                                        Sair
                                    </span>
                                </>
                                :
                                <>
                                    <Link href="/login" className="block py-2 px-3 md:p-0 text-gray-300 rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-red-400 dark:text-gray-200 md:dark:hover:text-red-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 md:dark:hover:bg-transparent transition-colors">
                                        Identifique-se
                                    </Link>
                                    <Link href="/loginAdmin" className="block py-2 px-3 md:p-0 text-gray-300 rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-red-400 dark:text-gray-200 md:dark:hover:text-red-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 md:dark:hover:bg-transparent transition-colors">
                                        Identifique-se (Admin)
                                    </Link>
                                </>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}