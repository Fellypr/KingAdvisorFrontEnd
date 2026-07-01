


export default function Input() {
    return (
        <div className="w-full max-w-[370px]">
            <label className="mb-1 block text-xs font-bold text-yellow-400">
                Tag do jogador
            </label>

            <div className="flex h-[45px] overflow-hidden rounded-lg border-[3px] border-yellow-400 bg-[#172946]">
                <input
                    type="text"
                    className="flex-1 bg-[#172946] px-4 text-lg font-bold tracking-wider text-[#5f78a5] outline-none placeholder:text-[#5f78a5]"
                    placeholder="2PPOUVLY2"
                />

                <button
                    className="flex w-[70px] items-center justify-center bg-[#f6bd3a] cursor-pointer"

                >
                    <span className="text-3xl pt-2">♕</span>
                </button>
            </div>
        </div>
    )
}