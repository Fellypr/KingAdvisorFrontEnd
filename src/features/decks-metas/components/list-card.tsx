

export function ListCard() {
    return (
        <div className="w-full">
            <div className="relative flex gap-6 items-start justify-center rounded-2xl w-full mt-15 ">

                {/* Grade de cartas (2 linhas × 4 colunas) */}
                <div className="grid grid-cols-4 grid-rows-2 gap-1.5 shrink-0">
                    <img src="/images/carta.png" className="w-[100px] h-[148px] object-cover rounded-md" alt="Card 1" />
                    <img src="/images/carta.png" className="w-[100px] h-[148px] object-cover rounded-md" alt="Card 2" />
                    <img src="/images/carta.png" className="w-[100px] h-[148px] object-cover rounded-md" alt="Card 3" />
                    <img src="/images/carta.png" className="w-[100px] h-[148px] object-cover rounded-md" alt="Card 4" />
                    <img src="/images/carta.png" className="w-[100px] h-[148px] object-cover rounded-md" alt="Card 5" />
                    <img src="/images/carta.png" className="w-[100px] h-[148px] object-cover rounded-md" alt="Card 6" />
                    <img src="/images/carta.png" className="w-[100px] h-[148px] object-cover rounded-md" alt="Card 7" />
                    <img src="/images/carta.png" className="w-[100px] h-[148px] object-cover rounded-md" alt="Card 8" />
                </div>

                {/* Texto da estratégia */}
                <div className="flex flex-col gap-2 flex-1 pt-1">
                    <h2 className="font-['Luckiest_Guy'] text-[30px] tracking-[5px] bg-gradient-to-r from-[#f5c842] to-[#e8a820] bg-clip-text text-transparent leading-none">
                        Log Bait
                    </h2>
                    <p className="font-['Luckiest_Guy'] text-[#d9d9d9] text-[16px] leading-relaxed">
                        Log Bait é um deck de controle focado em forçar o adversário a gastar o Tronco em cartas como Princesa e Gangue de Goblins. Quando ele fica sem resposta, você pressiona com o Barril de Goblins para causar dano constante na torre. A estratégia é defender com eficiência, desgastar o oponente aos poucos e vencer no acúmulo de dano ao longo da partida.
                    </p>
                </div>

                {/* Badge de vitória */}
                <div className="flex flex-col items-center justify-center shrink-0 relative w-[144px] h-[144px]">
                    <img src="/images/vitoria.png" className="absolute inset-0 size-full object-cover pointer-events-none" alt="Ícone de vitória" />
                    <span className="relative font-['Luckiest_Guy'] text-white text-[28px] tracking-[5px] leading-none z-10 ml-[14px]">
                        58%
                    </span>
                </div>

            </div>
        </div>
    );
}
