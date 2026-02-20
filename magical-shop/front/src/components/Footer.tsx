import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse hover:opacity-80 transition-opacity mb-4">
              <img src="./horde.png" className="h-10" alt="Horda" />
              <span className="text-lg font-semibold text-gray-100 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
                Empório Mágico
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              A maior e melhor loja de artefatos mágicos da Horda. Qualidade garantida desde o ano 20.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Links
              </span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gray-200 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-gray-200 transition-colors text-sm">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-400 hover:text-gray-200 transition-colors text-sm">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-400 hover:text-gray-200 transition-colors text-sm">
                  Registrar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Artefatos
              </span>
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400 text-sm">⚔️ Armas Lendárias</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">🛡️ Escudos Antigos</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">💎 Jóias Mágicas</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">📜 Pergaminhos Raros</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Contato
              </span>
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">
                📧 <span>contato@emporiomagico.horda</span>
              </li>
              <li className="text-gray-400 text-sm">
                📱 <span>+55 (000) 9999-9999</span>
              </li>
              <li className="text-gray-400 text-sm">
                🏰 <span>Orgrimmar, Reino da Horda</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Empório Mágico da Horda. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors text-sm">
                Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors text-sm">
                Termos
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-600 text-center mt-4">
            ⚔️ FOR THE HORDE! ⚔️
          </p>
        </div>
      </div>
    </footer>
  );
}
