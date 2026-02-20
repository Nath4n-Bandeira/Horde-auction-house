'use client'
import Link from "next/link";

export default function About() {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-red-950/30 to-transparent py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Empório Mágico da Horda
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Onde Poder e Magia se Encontram
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-100">
            <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
              ⚔️ Nossa História
            </span>
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Fundado nas terras de Orgrimmar, o Empório Mágico da Horda é o lugar de confiança há séculos para aventureiros, guerreiros e magos que buscam aperfeiçoar seu arsenal. Nascemos da necessidade de reunir em um só lugar os artefatos mais poderosos e raros de todos os continentes.
            </p>
            <p>
              Cada item em nosso acervo foi cuidadosamente selecionado e catalogado por mestres em magia e história. Desde espadas que queimam com fogo eternamente até anéis que concedem imortalidade, nos dedicamos a trazer o melhor para nossos clientes.
            </p>
            <p>
              Com uma rede de exploradores, negociantes e mestres artesãos, garantimos que você sempre tenha acesso aos artefatos mais procurados do mundo mágico.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="fade-gradient-border p-6 bg-black/50">
            <h3 className="text-xl font-bold mb-3 text-red-400">🎯 Missão</h3>
            <p className="text-gray-300 text-sm">
              Fornecer artefatos mágicos de qualidade superior com integridade, garantindo que cada cliente encontre exatamente o que procura para sua jornada épica.
            </p>
          </div>
          <div className="fade-gradient-border p-6 bg-black/50">
            <h3 className="text-xl font-bold mb-3 text-red-400">👁️ Visão</h3>
            <p className="text-gray-300 text-sm">
              Ser o principal destino para artefatos mágicos no Reino da Horda, reconhecido pela qualidade, variedade e pelo atendimento excepcional aos nossos clientes.
            </p>
          </div>
          <div className="fade-gradient-border p-6 bg-black/50">
            <h3 className="text-xl font-bold mb-3 text-red-400">💎 Valores</h3>
            <p className="text-gray-300 text-sm">
              Honestidade, Qualidade, Inovação e Excelência no Serviço. Acreditamos em construir relacionamentos duradouros com nossos clientes.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-100">
            <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
              ✨ Por Que Escolher o Empório?
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-2xl">⚡</div>
              <div>
                <h4 className="font-bold text-gray-100 mb-1">Artefatos Raridade Garantida</h4>
                <p className="text-gray-400 text-sm">Todos os itens passam por verificação de autenticidade e poder antes de chegar ao cliente</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">🛡️</div>
              <div>
                <h4 className="font-bold text-gray-100 mb-1">Garantia de Qualidade</h4>
                <p className="text-gray-400 text-sm">Se o artefato não atender suas expectativas, trocamos sem questionamentos</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">🚀</div>
              <div>
                <h4 className="font-bold text-gray-100 mb-1">Entrega Rápida</h4>
                <p className="text-gray-400 text-sm">Teleportação mágica garante entrega em menos de 7 dias úteis</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">💬</div>
              <div>
                <h4 className="font-bold text-gray-100 mb-1">Suporte Especializado</h4>
                <p className="text-gray-400 text-sm">Mestres em magia disponíveis para ajudar na escolha do artefato perfeito</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">💰</div>
              <div>
                <h4 className="font-bold text-gray-100 mb-1">Preços Baratos</h4>
                <p className="text-gray-400 text-sm">Os melhores preços da Horda, sem comprometer a qualidade</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">🏆</div>
              <div>
                <h4 className="font-bold text-gray-100 mb-1">Confiança Estabelecida</h4>
                <p className="text-gray-400 text-sm">Milhares de clientes satisfeitos em toda a Horda</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-100">
            <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
              📦 Categorias de Artefatos
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-gray-700 hover:border-red-700/50 transition-colors">
              <h4 className="font-bold text-gray-100 mb-2">⚔️ Armas de Combate</h4>
              <p className="text-gray-400 text-sm">Espadas, machados, maças e lânças imbuídas com poder bruto</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-gray-700 hover:border-red-700/50 transition-colors">
              <h4 className="font-bold text-gray-100 mb-2">🛡️ Armaduras e Proteção</h4>
              <p className="text-gray-400 text-sm">Escudos antigos, couraças enfeitiçadas e capacetes lendários</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-gray-700 hover:border-red-700/50 transition-colors">
              <h4 className="font-bold text-gray-100 mb-2">💎 Jóias e Acessórios</h4>
              <p className="text-gray-400 text-sm">Anéis mágicos, amuletos poderosos e pingentes raros</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border border-gray-700 hover:border-red-700/50 transition-colors">
              <h4 className="font-bold text-gray-100 mb-2">📜 Conhecimento Arcano</h4>
              <p className="text-gray-400 text-sm">Pergaminhos antigos, tomes proibidos e artefatos de estudos</p>
            </div>
          </div>
        </div>

        <div className="mb-16 fade-gradient-border p-8 bg-black/30">
          <h2 className="text-3xl font-bold mb-6 text-gray-100">
            <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
              💻 Sobre Este Projeto
            </span>
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              O <strong>Empório Mágico da Horda</strong> é muito mais que uma simples loja online - é um projeto fullstack completo que demonstra a integração perfeita entre tecnologia moderna e experiência do usuário.
            </p>
            <div className="bg-black/50 p-4 rounded-lg border border-gray-700 mt-4">
              <h4 className="font-bold text-red-400 mb-3">🛠️ Stack Tecnológico:</h4>
              <ul className="space-y-2 text-sm">
                <li><strong>Frontend:</strong> Next.js 14+ com TypeScript, React Hooks, TailwindCSS 3</li>
                <li><strong>Backend:</strong> Express.js com Prisma ORM para gerenciamento de dados</li>
                <li><strong>Banco de Dados:</strong> PostgreSQL para performance e confiabilidade</li>
                <li><strong>Autenticação:</strong> JWT com tokens httpOnly para máxima segurança</li>
                <li><strong>Segurança:</strong> bcrypt para hash de senhas, validação com Zod</li>
                <li><strong>Hospedagem de Mídia:</strong> Cloudinary para otimização de imagens</li>
                <li><strong>UI/UX:</strong> Componentes reutilizáveis com gradientes e animações suaves</li>
              </ul>
            </div>
            <p className="mt-4">
              O sistema implementa um modelo e-commerce completo com autenticação de usuários, gerenciamento de propostas/pedidos, painel administrativo avançado, e uma experiência visual imersiva baseada no universo de World of Warcraft.
            </p>
            <p>
              Cada feature foi desenvolvida com atenção aos mínimos detalhes, desde validação de formulários no cliente e servidor até a possibilidade de admins destacarem artefatos e gerenciarem o catálogo em tempo real.
            </p>
          </div>
        </div>

        <div className="text-center py-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-100">
            Pronto para Encontrar Seu Artefato de Poder?
          </h2>
          <Link 
            href="/" 
            className="inline-flex items-center px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-red-700 to-red-900 rounded-lg hover:from-red-600 hover:to-red-800 transition-all duration-200 shadow-lg hover:shadow-red-500/50"
          >
            Explorar Catálogo
            <svg className="w-5 h-5 ms-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      <section className="w-full bg-gradient-to-r from-red-950/20 to-transparent py-12 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 italic">
            "Na Horda, não acreditamos em sorte. Acreditamos em poder. E temos exatamente o que você precisa."
          </p>
          <p className="text-red-400 font-bold mt-4">
            ⚔️ FOR THE HORDE! ⚔️
          </p>
        </div>
      </section>
    </>
  );
}
