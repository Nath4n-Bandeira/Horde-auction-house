import { ArtefatoItf } from "@/utils/types/ArtefatoItf";
import Link from "next/link";

export function CardArtefato({ data }: { data: ArtefatoItf }) {
    return (
      <div className="fade-gradient-border max-w-sm overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col"
     style={{
       backgroundImage: 'url(/foguinho.gif)',
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat'
     }}
>
        <div className="bg-gradient-to-b from-black/80 to-black/95 flex flex-col h-full">
            <img className="w-full h-48 object-cover flex-shrink-0" src={data.foto} alt="Foto" />
            <div className="p-5 flex-grow flex flex-col justify-between">
                <h5 className="mb-2 text-2xl font-bold text-white bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                    {data.tipo.nome} {data.nome}
                </h5>
                <p className="mb-3 font-extrabold text-gray-200">
                    Preço R$: {Number(data.preco).toLocaleString("pt-br", {
                        minimumFractionDigits: 2
                    })}
                </p>
                <p className="mb-5 font-extrabold text-gray-300">
                    poder: {data.poder} - {data.raridade}
                </p>
                <Link href={`/detalhes/${data.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-red-700 to-red-900 rounded-lg hover:from-red-600 hover:to-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 transition-all duration-200 shadow-lg hover:shadow-red-500/50">
                    Ver Detalhes
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </div>
        </div>
    )
}