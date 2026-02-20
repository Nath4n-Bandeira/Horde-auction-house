'use client'
import './page.css'
import { useEffect, useState } from "react";
import { VictoryPie, VictoryLabel, VictoryTheme } from "victory";

interface graficoMarcaItf {
  marca: string
  num: number
}

interface graficoClienteItf {
  cidade: string
  num: number
}

interface geralDadosI {
  clientes: number
  artefato: number
  propostas: number
}


export default function Principal() {
  const [carrosMarca, setCarrosMarca] = useState<graficoMarcaItf[]>([])
  const [clientesCidade, setClientesCidade] = useState<graficoClienteItf[]>([])
  const [dados, setDados] = useState<geralDadosI>({} as geralDadosI)

  useEffect(() => {
    async function getDadosGerais() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/dashboard/gerais`)
      const dados = await response.json()
      setDados(dados)
    }
    getDadosGerais()

    async function getDadosGraficoMarca() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/dashboard/weaponclasses`)
      const dados = await response.json()
      setCarrosMarca(dados)
    }
    getDadosGraficoMarca()

    async function getDadosGraficoCliente() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/dashboard/clientesCidade`)
      const dados = await response.json()
      setClientesCidade(dados)
    }
    getDadosGraficoCliente()

  }, [])

  const listaCarrosMarca = carrosMarca.map(item => (
    { x: item.marca, y: item.num }
  ))

  const listaClientesCidade = clientesCidade.map(item => (
    { x: item.cidade, y: item.num }
  ))

  return (
    <div className="container mt-24">
      <h2 className="text-3xl mb-8 font-bold bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">Visão Geral do Sistema</h2>

      <div className="w-full flex flex-col lg:flex-row justify-between mx-auto mb-8 gap-4">
        <div className="fade-gradient-border flex-1 p-6">
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xl text-center font-bold mx-auto block px-2.5 py-5 rounded">
            {dados.clientes}</span>
          <p className="font-bold mt-4 text-center text-gray-300">qtd Barganhadores</p>
        </div>
        <div className="fade-gradient-border flex-1 p-6">
          <span className="bg-gradient-to-r from-red-600 to-red-800 text-white text-xl text-center font-bold mx-auto block px-2.5 py-5 rounded">
            {dados.artefato}</span>
          <p className="font-bold mt-4 text-center text-gray-300">qtd Artefatos</p>
        </div>
        <div className="fade-gradient-border flex-1 p-6">
          <span className="bg-gradient-to-r from-green-600 to-green-800 text-white text-xl text-center font-bold mx-auto block px-2.5 py-5 rounded">
            {dados.propostas}</span>
          <p className="font-bold mt-4 text-center text-gray-300">qtd Propostas</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="fade-gradient-border p-4 overflow-hidden"
          style={{
            backgroundImage: 'url(/foguinho.gif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
          <svg viewBox="30 55 400 400" className="mx-auto">
            <VictoryPie
              standalone={false}
              width={400}
              height={400}
              data={listaCarrosMarca}
              innerRadius={50}
              labelRadius={80}
              theme={VictoryTheme.grayscale}
              style={{
                labels: {
                  fontSize: 10,
                  fill: "#fff",
                  fontFamily: "Arial",
                  fontWeight: "bold"
                }
              }}
            />
            <VictoryLabel
              textAnchor="middle"
              style={{
                fontSize: 14,
                fill: "#ffffff",
                fontFamily: "Arial",
                fontWeight: "bold"
              }}
              x={200}
              y={200}
              text={["Artefatos", "por Tipo"]}
            />
          </svg>
        </div>

        <div className="fade-gradient-border p-4 overflow-hidden"
          style={{
            backgroundImage: 'url(/foguinho.gif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
          <svg viewBox="30 55 400 400" className="mx-auto">
            <VictoryPie
              standalone={false}
              width={400}
              height={400}
              data={listaClientesCidade}
              innerRadius={50}
              labelRadius={80}
              theme={VictoryTheme.grayscale}
              style={{
                labels: {
                  fontSize: 10,
                  fill: "#fff",
                  fontFamily: "Arial",
                  fontWeight: "bold"
                }
              }}
            />
            <VictoryLabel
              textAnchor="middle"
              style={{
                fontSize: 14,
                fill: "#ffffff",
                fontFamily: "Arial",
                fontWeight: "bold"
              }}
              x={200}
              y={200}
              text={["Barganhadores", "por Cidade"]}
            />
          </svg>
        </div>
      </div>
    </div>
  )
}