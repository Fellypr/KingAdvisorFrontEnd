import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <main>
        <header className="absolute z-50
          w-full flex justify-center items-center
          bg-transparent shadow-sm shadow-black/12">
          <Navbar />
        </header>
        <div className="absolute w-full h-screen">
          <video className="w-full h-screen object-cover" src="/video/Apresentacao.mp4" autoPlay loop muted playsInline></video>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute w-150 gap-5 flex flex-col" style={{ marginTop: '-25%', marginLeft: '30px' }}>
            <img src="/Texto/nome-king-adivisor.png" alt="" className="max-sm:w-3/5 max-md:w-3/5 max-lg:w-3/6" />
            <h3 className="text-gray-200 text-1xl max-sm:text-xl max-md:text-xl max-lg:text-2xl pl-3">Descubra os decks mais fortes do meta, analise suas cartas e encontre combinações que aumentam sua taxa de vitória.</h3>

            <button
              className="flex justify-center items-center gap-2.5 px-4 py-2 rounded-lg cursor-pointer w-[300px] active:translate-y-0.5 transition-transform hover:cursor-pointer hover:scale-102 ml-2"
              style={{
                background: "linear-gradient(180deg, #f5c842 0%, #e8970a 60%, #c97b00 100%)",
                border: "2px solid #a35e00",
                boxShadow: "0 3px 0 #7a3f00, inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
            >

              <svg className="w-9 h-9 shrink-0" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="17" fill="#b05f00" stroke="#7a3f00" strokeWidth="1.5" />
                <circle cx="18" cy="18" r="14" fill="#cc6e00" />
                <polygon points="18,8 21,15 29,15 23,20 25,28 18,23 11,28 13,20 7,15 15,15"
                  fill="#ffe066" stroke="#c97b00" strokeWidth="0.8" />
              </svg>


              <div className="flex flex-col flex-1 leading-tight">
                <span className="text-[9px] font-bold tracking-widest uppercase" style={{ color: "#7a3f00" }}>
                  Clash Royale
                </span>
                <span className="text-base font-black text-white" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}>
                  Analisar seu Deck
                </span>
              </div>


              <span className="text-xl font-black text-white mt-2" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}>›</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
