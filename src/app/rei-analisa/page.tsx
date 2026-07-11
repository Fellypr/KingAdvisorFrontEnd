import Navbar from "@/components/navbar";
import Input from "@/components/input";
import DeckUsuario from "@/components/deck";
import {FilterCard,Cards} from "@/features/analise-rei"

export default function ReiAnalisaPage() {
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
                <FilterCard/>
            </div>
            <section className="flex-col w-full bg-[url(/images/fundo_azul2.png)] bg-no-repeat bg-center bg-cover h-screen flex pt-24 sm:pt-28 md:pt-35 px-4 sm:px-8 md:px-15">
                <Cards/>
            </section>
        </div>
    );
}