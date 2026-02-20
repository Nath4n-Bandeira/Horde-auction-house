'use client'
import { useEffect, useState } from "react"
import Link from 'next/link'
import { ArtefatoItf } from "@/utils/types/ArtefatoItf"
import ItemCarro from "@/components/ItemArtefato"



function CadCarros() {
  const [carros, setCarros] = useState<ArtefatoItf[]>([])

  useEffect(() => {
    async function getCarros() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/artefatos`)
      const dados = await response.json()
      setCarros(dados)
    }
    getCarros()
  }, [])

  const listaCarros = carros.map(carro => (
    <ItemCarro key={carro.id} carro={carro} carros={carros} setCarros={setCarros} />
  ))

  return (
    <div className='m-4 mt-24'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className="mb-0 text-2xl font-bold bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent md:text-3xl lg:text-4xl">
          Artefatos
        </h1>
        <Link href="carros/novo" 
          className="text-white bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-md px-5 py-2.5 focus:outline-none transition-all">
          Canalize um artefato
        </Link>
      </div>

      <div className="relative overflow-x-auto shadow-lg sm:rounded-lg border border-gray-700">
        <table className="w-full text-sm text-left rtl:text-right text-gray-400">
          <thead className="text-xs text-gray-300 uppercase bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Foto
              </th>
              <th scope="col" className="px-6 py-3">
                Nome do artefato
              </th>
              <th scope="col" className="px-6 py-3">
                Tipo de arma
              </th>
              <th scope="col" className="px-6 py-3">
                Nivel de poder
              </th>
              <th scope="col" className="px-6 py-3">
                Preço G$
              </th>
              <th scope="col" className="px-6 py-3">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {listaCarros}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CadCarros