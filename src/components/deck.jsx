import {AnalyzeDeckButton} from "@/features/analise-rei"

export default function DeckUsuario() {
    const box = Array.from({ length: 8 })
    return (
        <div className="h-auto w-full ">
            <div
                className="mx-auto w-full max-w-140 rounded-lg  p-4 sm:p-5 md:p-6"
            >
                <div className="grid grid-cols-4 gap-3 sm:grid-cols-4 sm:gap-4 md:gap-x-9 md:gap-y-6">

                    {box.map((_, index) => (
                        <div key={index} className="h-[80px] w-[60px] sm:h-[140px] sm:w-[100px] md:h-[140px] md:w-[100px] rounded-lg border-2 border-black/60 bg-black/30 shadow-md shadow-black flex justify-center items-center">
                            {index === 0 && (
                                <img src="/images/cristal_de_evolucao.png" alt="" className="w-12" />
                            )}
                            {index === 1 && (
                                <img src="/images/cristal_campeao.png" alt="" className="w-12" />
                            )}
                            {index === 2 && (
                                <img src="/images/cristal_campeao_evolucao.png" alt="" className="w-12" />
                            )}
                        </div>
                    ))}

                </div>
                <div className="w-full flex aling-center justify-center mt-5">
                    <AnalyzeDeckButton/>
                </div>
            </div>
        </div>
    )
}
