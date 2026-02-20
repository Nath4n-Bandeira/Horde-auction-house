"use client"
import { ArtefatoItf } from "@/utils/types/ArtefatoItf"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useClienteStore } from "@/context/ClienteContext"
import { useForm } from "react-hook-form"
import { toast } from 'sonner'

type Inputs = {
  descricao: string
}

export default function Detalhes() {
  const params = useParams()

  const [artefatos, setArtefatos] = useState<ArtefatoItf>()
  const { cliente } = useClienteStore()

  const { register, handleSubmit, reset } = useForm<Inputs>()

  useEffect(() => {
    async function buscaDados() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/artefatos/${params.carro_id}`)
      const dados = await response.json()
      // console.log(dados)
      setArtefatos(dados)
    }
    buscaDados()
  }, [])

  const listaFotos = artefatos?.fotos.map(foto => (
    <div key={foto.id}>
      <img src={foto.url} alt={foto.encantamentos}
        title={foto.encantamentos}
        className="h-52 max-w-80 rounded-lg" />
    </div>
  ))

  async function enviaProposta(data: Inputs) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/propostas`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        clienteId: cliente.id,
        artefatoId: Number(params.carro_id),
        descricao: data.descricao
      })
    })

    if (response.status == 201) {
      toast.success("Obrigado. Sua proposta foi enviada. Aguarde retorno")
      reset()
    } else {
      toast.error("Erro... Não foi possível enviar sua proposta")
    }
  }

  return (
    <>
      <section className="flex mt-6 mx-auto flex-col items-center fade-gradient-border max-w-4xl hover:shadow-2xl transition-all"
      style={{
       backgroundImage: 'url(/foguinho.gif)',
       backgroundSize: 'cover',
       backgroundPosition: 'center'
     }}>

        {artefatos?.foto &&
          <>
            <img className="object-cover w-full rounded-t-lg h-96 md:h-80" 
              src={artefatos?.foto} alt="Foto do Carro" />
            <div className="flex flex-col justify-between p-6 leading-normal bg-black/80 w-full">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
                {artefatos?.tipo.nome} {artefatos?.nome}
              </h5>
              <h5 className="mb-2 text-xl tracking-tight text-gray-300">
                Poder: {artefatos?.poder} - {artefatos?.raridade}
              </h5>
              <h5 className="mb-2 text-xl tracking-tight text-gray-300">
                Preço R$: {Number(artefatos?.preco)
                  .toLocaleString("pt-br", { minimumFractionDigits: 2 })}
              </h5>
              <p className="mb-4 font-normal text-gray-300">
                {artefatos?.encantamentos}
              </p>
              {cliente.id ?
                <>
                  <h3 className="text-xl font-bold tracking-tight text-white mb-4">
                  Você pode fazer uma Proposta para este artefato!</h3>
                  <form onSubmit={handleSubmit(enviaProposta)}>
                    <input type="text" className="mb-2 mt-4 bg-gray-700 border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 cursor-not-allowed" value={`${cliente.nome} (${cliente.email})`} disabled readOnly />
                    <textarea id="message" className="mb-4 block p-2.5 w-full text-sm text-gray-100 bg-gray-800 rounded-lg border border-gray-600 focus:ring-red-500 focus:border-red-500"
                      placeholder="Descreva a sua proposta"
                      required
                      {...register("descricao")}></textarea>
                    <button type="submit" className="text-white bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center transition-all">Enviar Proposta</button>
                  </form>
                </>
                :
                <h2 className="mb-2 text-xl tracking-tight text-yellow-400">
                  APENAS AVENTUREIROS IDENTIFICADOS PODEM BARGANHARRRRRRR
                </h2>
              }
            </div>
          </>
        }
      </section>

      <div className="mt-4 md:max-w-5xl mx-auto
         grid grid-cols-2 md:grid-cols-3 gap-4">
        {listaFotos}
      </div>

    </>
  )
}