import {DeckUsuario} from "@/features/analise-rei/"

export function KingAnalyzing() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2 z-50 mt-0 min-h-screen w-full py-12 max-w-7xl mx-auto">
            
            
            <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-2 w-full max-w-4xl relative overflow-hidden mt-15">

                <div className="relative shrink-0">
                    <img 
                        src="/images/rei-analisando.png" 
                        alt="Rei analisando" 
                        className="w-48 md:w-64 drop-shadow-[0_10px_15px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-500" 
                    />
                </div>
                
                <div className="flex flex-col text-center md:text-left z-10">
                    <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-700 drop-shadow-sm tracking-wide mb-3">
                        ANÁLISE DO REI
                    </h1>
                    <p className="text-slate-200 text-base md:text-lg leading-relaxed max-w-lg drop-shadow-md ">
                        Ora, ora... vejo que escolheste um deck veloz e ousado! Porém, até os mais bravos guerreiros precisam de equilíbrio. Teu exército ataca com força, mas deixa brechas perigosas na defesa. 
                        Recomendo reforçar tuas linhas e administrar melhor o elixir. Faz isso, e logo estarás marchando rumo a inúmeras vitórias e baús repletos de recompensas!
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center shrink-0">
                <DeckUsuario/>
            </div>
            
        </div>
    );
}