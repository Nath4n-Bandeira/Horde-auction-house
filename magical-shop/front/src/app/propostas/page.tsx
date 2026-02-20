'use client'
import './page.css'
import { useEffect, useState } from "react";
import { useClienteStore } from "@/context/ClienteContext";
import { PropostaItf } from "@/utils/types/PropostaItf";

export default function Propostas() {
  const [propostas, setPropostas] = useState<PropostaItf[]>([])
  const { cliente } = useClienteStore()

  useEffect(() => {
    async function buscaDados() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/propostas/${cliente.id}`)
      const dados = await response.json()
      setPropostas(dados)
    }
    buscaDados()
  }, [])


  function dataDMA(data: string) {
    const ano = data.substring(0, 4)
    const mes = data.substring(5, 7)
    const dia = data.substring(8, 10)
    return dia + "/" + mes + "/" + ano
  }

  const propostasTable = propostas.map(proposta => (
    <tr key={proposta.id} className="odd:bg-gray-900/50 even:bg-gray-800/30 border-b border-gray-700/50 hover:bg-gray-800/40 transition-colors">
      <th scope="row" className="px-6 py-4 font-medium text-gray-300 whitespace-nowrap">
        <p><b>{proposta.artefato.tipo.nome} {proposta.artefato.nome}</b></p>
        <p className='mt-3 text-gray-400'>poder: {proposta.artefato.poder} -
          R$: {Number(proposta.artefato.preco).toLocaleString("pt-br", { minimumFractionDigits: 2 })}</p>
      </th>
      <td className="px-6 py-4">
        <img src={proposta.artefato.foto} className="fotoCarro" alt="Foto Carro" />
      </td>
      <td className="px-6 py-4 text-gray-300">
        <p><b>{proposta.encantamentos}</b></p>
        <p className='text-gray-400'><i>Enviado em: {dataDMA(proposta.createdAt)}</i></p>
      </td>
      <td className="px-6 py-4 text-gray-300">
        {proposta.resposta ?
          <>
            <p><b>{proposta.resposta}</b></p>
            <p className='text-gray-400'><i>Respondido em: {dataDMA(proposta.updatedAt as string)}</i></p>
          </>
          :
          <i className='text-yellow-400'>Aguardando...</i>}
      </td>
    </tr>
  ))

  return (
    <section className="max-w-7xl mx-auto p-4">
      <h1 className="mb-6 mt-4 text-3xl font-extrabold leading-none tracking-tight bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
        Listagem de <span className="">Minhas Propostas</span></h1>

      <div className="relative overflow-x-auto shadow-lg sm:rounded-lg border border-gray-700">
        <table className="w-full text-sm text-left rtl:text-right text-gray-400">
          <thead className="text-xs text-gray-300 uppercase bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Veículo
              </th>
              <th scope="col" className="px-6 py-3">
                Foto
              </th>
              <th scope="col" className="px-6 py-3">
                Proposta
              </th>
              <th scope="col" className="px-6 py-3">
                Resposta
              </th>
            </tr>
          </thead>
          <tbody>
            {propostasTable}
          </tbody>
        </table>
      </div>
    </section>
  )
}