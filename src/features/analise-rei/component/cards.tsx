export function Cards(){
    const cartas = Array.from({ length: 120 })
    return(
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 w-full h-full flex-wrap overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-amber-300 [&::-webkit-scrollbar-track]:bg-gray-900 [&::-webkit-scrollbar-thumb:hover]:bg-amber-500 [&::-webkit-scrollbar-thumb]:rounded-2xl ">
                    {cartas.map((_, index) => (
                        <button key={index} className="flex items-center justify-center p-1 ">
                            <img src="/images/carta.png" alt="" className="w-[70px] h-[100px] sm:w-[90px] sm:h-[150px] md:w-[110px] md:h-[155px" />
                        </button>
                    ))}
                </div>
    )
}