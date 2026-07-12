import {AnalyzeDeckButton} from "@/features/analise-rei"

export default function DeckUsuario() {
    const box = Array.from({ length: 8 })
    return (
        <div className="h-auto w-full ">
            <div
                className="mx-auto w-full max-w-[560px] rounded-lg border-2 border-cyan-400 bg-[#001f3f] p-4 sm:p-5 md:p-6"
            >
                <div className="grid grid-cols-4 gap-3 sm:grid-cols-4 sm:gap-4 md:gap-x-9 md:gap-y-6">

                    {box.map((_, index) => (
                        <div key={index} className="h-[80px] w-[60px] sm:h-[140px] sm:w-[100px] md:h-[140px] md:w-[100px] rounded-lg border-2 border-black bg-[#2d4a82]"></div>
                    ))}

                </div>
                <div className="w-full flex aling-center justify-center mt-5">
                    <AnalyzeDeckButton/>
                </div>
            </div>
        </div>
    )
}