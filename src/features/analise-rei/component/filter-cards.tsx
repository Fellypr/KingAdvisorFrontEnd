import { ChevronUp, ChevronDown } from "lucide-react";

export function FilterCard() {
  return (
    <div className="bg-gray-900 border-sm border-black/50 shadow-lg shadow-black/50 mt-[-12px] text-sm md:text-lg flex items-center justify-between p-3 w-full max-w-[1200px] md:rounded-2xl">
      <div className="">
        <h2 className="text-[18px] sm:text-3xl">Coleção de cartas</h2>
        <h4 className="text-fuchsia-500">Na coleção: 121/121</h4>
      </div>
      <div className="flex gap-5">
        <button className="bg-sky-800/70 hover:bg-sky-700/90 transition-colors cursor-pointer shadow-md shadow-sky-900/60 rounded-md flex justify-center items-center pr-2 pl-2 w-12 h-12">
          <ChevronUp />
        </button>
        <button className="bg-sky-800/70 hover:bg-sky-700/90 transition-colors cursor-pointer shadow-md shadow-sky-900/60 p-2 rounded-md pt-4">
          Por elixir
        </button>
      </div>
    </div>
  );
}
