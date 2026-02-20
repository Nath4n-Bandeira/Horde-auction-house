'use client'
import { useEffect, useState } from "react"
import ItemCliente from "@/components/itemCliente"
import { ClienteItf } from "@/utils/types/ClienteItf"

function CadClientes() {
  const [clientes, setClientes] = useState<ClienteItf[]>([])

  useEffect(() => {
    async function getClientes() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/clientes`)
        const dados = await response.json()
        setClientes(dados)
      } catch (error) {
        console.error("Erro ao buscar clientes", error)
      }
    }
    getClientes()
  }, [])

  const listaClientes = clientes.map(cliente => (
    <ItemCliente key={cliente.id} cliente={cliente} clientes={clientes} setClientes={setClientes} />
  ))

  return (
    <div className='m-4 mt-24'>
      <div className='flex justify-between'>
        <h1 className="mb-4 text-2xl font-bold bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent md:text-3xl lg:text-4xl">
          Clientes Registrados
        </h1>
       </div>

      <div className="relative overflow-x-auto shadow-lg sm:rounded-lg border border-gray-700">
        <table className="w-full text-sm text-left rtl:text-right text-gray-400">
          <thead className="text-xs text-gray-300 uppercase bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
            <tr>
             
              <th scope="col" className="px-6 py-3">
                Nome
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {listaClientes}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CadClientes
