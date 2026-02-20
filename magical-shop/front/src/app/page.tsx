'use client'
import { CardArtefato } from "@/components/CardArtefato";
import { InputPesquisa } from "@/components/InputPesquisa";
import { ArtefatoItf } from "@/utils/types/ArtefatoItf";
import { useEffect, useState } from "react";
import { useClienteStore } from "@/context/ClienteContext"

export default function Home() {
  const [artefatos, setArtefatos] = useState<ArtefatoItf[]>([])
  const { logaCliente } = useClienteStore()

  useEffect(() => {
    async function buscaDados() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/artefatos`)
      const dados = await response.json()
      console.log(dados)
      setArtefatos(dados)
    }
    buscaDados()

    async function buscaCliente(id: string) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/clientes/${id}`)
      const dados = await response.json()
      logaCliente(dados)
    }
    if (localStorage.getItem("clienteKey")) {
      const idCliente = localStorage.getItem("clienteKey")
      buscaCliente(idCliente as string)
    }
  }, [])

  // Separa o destaque dos outros artefatos
  const artefatoDestaque = artefatos.find(artefato => artefato.destaque)
  const outrosArtefatos = artefatos.filter(artefato => !artefato.destaque)

  const listaOutrosCarros = outrosArtefatos.map( artefato => (
    <CardArtefato data={artefato} key={artefato.id} />
  ))

  return (
    <>
      <InputPesquisa setCarros={setArtefatos} />
      
      {/* Seção do Destaque Único */}
      {artefatoDestaque && (
        <div className="w-full flex flex-col items-center justify-center p-4 mb-12">
          <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-center">
             <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent font-black">⚔️ Artefato em Destaque ⚔️</span>
          </h1>
          <div className="w-full max-w-2xl">
            <CardArtefato data={artefatoDestaque} />
          </div>
        </div>
      )}

      {/* Seção de Outros Artefatos */}
      <div className="w-full p-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-8 text-3xl font-extrabold leading-none tracking-tight md:text-4xl">
             <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">Outros Artefatos</span>
          </h2>
          {outrosArtefatos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {listaOutrosCarros}
            </div>
          ) : artefatos.length > 0 && !artefatoDestaque ? (
            // Se não há destaque, mostra todos os artefatos como "outros"
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {artefatos.map( artefato => (
                <CardArtefato data={artefato} key={artefato.id} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400 text-lg">Nenhum artefato disponível</p>
          )}
        </div>
      </div>
    </>
  );
}
