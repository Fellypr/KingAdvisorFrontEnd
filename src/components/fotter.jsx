// components/Footer.tsx
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a0e1a] border-t-4 border-amber-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-10 sm:pt-12 pb-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-6">
          {/* Navegação */}
          <div className="text-center md:text-left">
            <h3 className="text-amber-400 font-bold text-lg mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-slate-300 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="/decks" className="text-slate-300 hover:text-white transition-colors">
                  Decks
                </a>
              </li>
              <li>
                <a href="/estrategias" className="text-slate-300 hover:text-white transition-colors">
                  Estratégias
                </a>
              </li>
              <li>
                <a href="/recomendacoes" className="text-slate-300 hover:text-white transition-colors">
                  Recomendações
                </a>
              </li>
            </ul>
          </div>

          {/* Logo central */}
          <div className="flex justify-center order-first md:order-none">
            <Image
              src="/images/logoClash-removebg-preview.png"
              alt="King Advisor"
              width={200}
              height={200}
              className="object-contain w-40 sm:w-50 md:w-[200px] h-auto"
            />
          </div>

          {/* Contato */}
          <div className="text-center md:text-right md:flex md:flex-col md:items-end">
            <h3 className="text-amber-400 font-bold text-lg mb-4">
              Contato
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Suporte
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-slate-700 mt-10 pt-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
            <p className="text-slate-400 text-sm">© 2026 King Advisor</p>
            <p className="text-slate-400 text-sm flex items-center gap-1.5">
              <span className="text-slate-500">✕</span>
              Feito para estrategistas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}