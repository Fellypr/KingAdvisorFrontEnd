import Navbar from "@/components/navbar";
import Input from "@/components/input";
import DeckUsuario from "@/components/deck";
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function ReiAnalisaPage() {
    const cartas = Array.from({ length: 120 })
    return (
        <div>
            <header className="z-50
          w-full flex justify-center items-center
          bg-blue-900 shadow-sm shadow-black/70 absolute">
                <Navbar />
            </header>
            <section className="flex flex-col gap-6 pt-30 md:gap-10 w-full bg-[url(/images/fundo_azul.png)] bg-no-repeat bg-center bg-cover h-screen flex pt-24 sm:pt-28 md:pt-35 px-4 sm:px-8 md:px-20">
                <Input />
                <DeckUsuario />
            </section>
            <div className="absolute z-50  w-full flex justify-center">
                <div className="bg-gray-900 border-sm border-black/50 shadow-lg shadow-black/50 mt-[-12px] text-sm md:text-lg flex items-center justify-between p-3 w-full max-w-[1200px] md:rounded-2xl">
                    <div className="">
                        <h2 className="text-[18px] sm:text-3xl">Coleção de cartas</h2>
                        <h4 className="text-fuchsia-500">Na coleção: 121/121</h4>
                    </div>
                    <div className="flex gap-5">
                        <button className="bg-sky-800/70 hover:bg-sky-700/90 transition-colors cursor-pointer shadow-md shadow-sky-900/60 rounded-md flex justify-center items-center pr-2 pl-2 w-12 h-12">
                            <ChevronUp/>
                        </button>
                        <button className="bg-sky-800/70 hover:bg-sky-700/90 transition-colors cursor-pointer shadow-md shadow-sky-900/60 p-2 rounded-md pt-4">
                            Por elixir
                        </button>
                    </div>
                </div>
            </div>
            <section className="flex-col w-full bg-[url(/images/fundo_azul2.png)] bg-no-repeat bg-center bg-cover h-screen flex pt-24 sm:pt-28 md:pt-35 px-4 sm:px-8 md:px-15">
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 w-full h-full flex-wrap overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-amber-300 [&::-webkit-scrollbar-track]:bg-gray-900 [&::-webkit-scrollbar-thumb:hover]:bg-amber-500 [&::-webkit-scrollbar-thumb]:rounded-2xl ">
                    {cartas.map((_, index) => (
                        <button key={index} className="flex items-center justify-center p-1 ">
                            <img src="/images/carta.png" alt="" className="w-[70px] h-[100px] sm:w-[90px] sm:h-[150px] md:w-[110px] md:h-[155px" />
                        </button>
                    ))}
                </div>

            </section>
        </div>
    );
}