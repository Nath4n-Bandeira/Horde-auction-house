'use client'
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { TiDeleteOutline } from "react-icons/ti"
import { FaRegStar } from "react-icons/fa"
import Cookies from "js-cookie"


import { jwtDecode } from "jwt-decode"
import { ArtefatoItf } from "@/utils/types/ArtefatoItf"

interface listaCarroProps {
  carro: ArtefatoItf,
  carros: ArtefatoItf[],
  setCarros: Dispatch<SetStateAction<ArtefatoItf[]>>
}

type AdminPayload = {
  adminLogadoId: string;
  adminLogadoNome: string;
  adminLogadoNivel: number;
};

function ItemCarro({ carro, carros, setCarros }: listaCarroProps) {
  const [admin, setAdmin] = useState<AdminPayload | null>(null);

  useEffect(() => {
    const token = Cookies.get("admin_logado_token");
    if (!token) {
      return;
    }

    try {
      const decoded = jwtDecode<AdminPayload>(token);
      setAdmin(decoded);
    } catch (error) {
      console.error("Erro ao decodificar token:", error);
      alert("Token inválido");
    }
  }, []);

  async function excluirCarro() {

    if (!admin || admin.adminLogadoNivel != 1) {
      alert("Você não tem permissão para excluir veículos");
      return;
    }

    if (confirm(`Confirma a exclusão`)) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/artefatos/${carro.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + Cookies.get("admin_logado_token") as string
          },
        },
      )

      if (response.status == 200) {
        const carros2 = carros.filter(x => x.id != carro.id)
        setCarros(carros2)
        alert("Carro excluído com sucesso")
      } else {
        alert("Erro... Carro não foi excluído")
      }
    }
  }

  async function definirDestaque() {
    if (!admin) {
      alert("Você não tem permissão para definir destaques");
      return;
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/artefatos/destacar/${carro.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + Cookies.get("admin_logado_token") as string
        },
      },
    )

    if (response.status == 200) {
      const carros2 = carros.map(x => {
        if (x.id == carro.id) {
          return { ...x, destaque: true }
        }
        return { ...x, destaque: false }
      })
      setCarros(carros2)
      alert("Destaque definido com sucesso")
    } else {
      alert("Erro ao definir destaque")
    }
  }

  return (
    <tr key={carro.id} className="odd:bg-gray-900/50 even:bg-gray-800/30 border-b border-gray-700/50 hover:bg-gray-800/40 transition-colors">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <img src={carro.foto} alt="awooogaaa"
          style={{ width: 200 }} />
      </th>
      <td className={`px-6 py-4 ${carro.destaque ? "font-extrabold" : ""}`}>
        {carro.nome}
      </td>
      <td className={`px-6 py-4 ${carro.destaque ? "font-extrabold" : ""}`}>
        {carro.tipo.nome}
      </td>
      <td className={`px-6 py-4 ${carro.destaque ? "font-extrabold" : ""}`}>
        {carro.poder}
      </td>
      <td className={`px-6 py-4 ${carro.destaque ? "font-extrabold" : ""}`}>
        {Number(carro.preco).toLocaleString("pt-br", { minimumFractionDigits: 2 })}
      </td>
      <td className="px-6 py-4">
        <TiDeleteOutline className="text-3xl text-red-600 inline-block cursor-pointer" title="Excluir"
          onClick={excluirCarro} />&nbsp;
        <FaRegStar className={`text-3xl inline-block cursor-pointer transition-colors ${
          carro.destaque ? "text-yellow-400 hover:text-yellow-300" : "text-gray-500 hover:text-yellow-500"
        }`} title={carro.destaque ? "Destaque Ativo" : "Definir como Destaque"}
          onClick={definirDestaque} />
      </td>
    </tr>
  )
}

export default ItemCarro