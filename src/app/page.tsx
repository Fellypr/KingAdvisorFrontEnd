import Navbar from "@/components/navbar";
import { ListCard } from "@/features/decks-metas";
import Footer from "@/components/fotter";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <header className="absolute z-50
          w-full flex justify-center items-center
          bg-transparent">
          <Navbar />
        </header>
        <div className="relative w-full h-screen">
          <video className="w-full h-screen object-cover" src="/video/Apresentacao.mp4" autoPlay loop muted playsInline></video>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-start px-6 md:px-16 lg:px-20 z-10">
            <div className="flex flex-col gap-5 w-full max-w-md h-full justify-center lg:max-w-xl text-center lg:text-left items-center lg:items-start  pt-52 lg:pb-10 md:pb-10 sm:pt-0">
              <img src="/Texto/nome-king-adivisor.png" alt="King Advisor" className="w-full max-w-[480px] md:max-w-md lg:w-3/4" />
              <h3 className="text-gray-200 text-sm sm:text-base lg:text-[15px] lg:pl-3">
                Descubra os decks mais fortes do meta, analise suas cartas e encontre combinações que aumentam sua taxa de vitória.
              </h3>

              <Link
                className="flex justify-center items-center gap-2.5 px-4 py-2 rounded-lg cursor-pointer w-full max-w-[280px] sm:max-w-[300px] active:translate-y-0.5 transition-transform hover:cursor-pointer hover:scale-102 lg:ml-2"
                style={{
                  background: "linear-gradient(180deg, #f5c842 0%, #e8970a 60%, #c97b00 100%)",
                  border: "2px solid #a35e00",
                  boxShadow: "0 3px 0 #7a3f00, inset 0 1px 0 rgba(255,255,255,0.3)",
                }}
                href="/rei-analisa"

              >
                <svg className="w-9 h-9 shrink-0" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="17" fill="#b05f00" stroke="#7a3f00" strokeWidth="1.5" />
                  <circle cx="18" cy="18" r="14" fill="#cc6e00" />
                  <polygon points="18,8 21,15 29,15 23,20 25,28 18,23 11,28 13,20 7,15 15,15"
                    fill="#ffe066" stroke="#c97b00" strokeWidth="0.8" />
                </svg>

                <div className="flex flex-col flex-1 leading-tight text-left">
                  <span className="text-[9px] font-bold tracking-widest uppercase" style={{ color: "#7a3f00" }}>
                    Clash Royale
                  </span>
                  <span className="text-base font-black text-white" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}>
                    Analisar seu Deck
                  </span>
                </div>

                <span className="text-xl font-black text-white mt-2" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}>›</span>
              </Link>
            </div>
          </div>
          <img src="/divisores/BruxaComPrincipeSemFundo.png" alt="" className="w-full absolute bottom-[-1%] md:bottom-[-2%] z-20 pointer-events-none" />
        </div>
        <section className="w-full min-h-screen z-10 bg-[url(/images/fundo_de_madeira_1.png)] bg-repeat bg-auto pt-24 pb-20 px-4 sm:px-8 md:px-12 lg:px-20">
          <h1 className="bg-gradient-to-r from-[#F5C842] to-[#DEAC18] to-[#8F7527] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl tracking-wider text-center lg:text-left">
            DECKS DO META 84°
          </h1>
          <div className="flex flex-col gap-6 mt-10 w-full max-w-6xl mx-auto">
            <ListCard/>
            <ListCard/>
            <ListCard/>
            <ListCard/>
            <ListCard/>
            <ListCard/>
          </div>
        </section>
        <Footer/>
      </main>
    </div>
  );
}
