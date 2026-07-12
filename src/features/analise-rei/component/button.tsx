import type { ButtonHTMLAttributes } from "react";

interface AnalyzeDeckButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export function AnalyzeDeckButton({
  loading = false,
  disabled,
  className = "",
  ...props
}: AnalyzeDeckButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type="button"
      disabled={isDisabled}
      aria-busy={loading}
      className={`
        relative flex h-16 w-[260px] items-center justify-center
        overflow-hidden rounded-2xl border border-[#1B2A63]
        bg-gradient-to-t from-[#6F8DF0] via-[#4461B0] to-[#263B82]
        px-5 text-white shadow-[0_3px_0_#1B2A63]
        transition duration-150
        hover:brightness-110
        active:translate-y-[2px] active:shadow-[0_1px_0_#1B2A63]
        focus-visible:outline-none focus-visible:ring-4
        focus-visible:ring-[#6F8DF0]/40
        disabled:cursor-not-allowed disabled:opacity-60
        cursor-pointer
        ${className}
      `}
      {...props}
    >
      {/* Reflexo superior */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute left-5 right-5 top-2
          h-4 rounded-full bg-white/20
        "
      />

      <span className="relative z-10 flex items-center gap-3">
        <span aria-hidden="true" className="text-2xl leading-none">
          ⚔️
        </span>

        <span className="text-xl font-extrabold tracking-[0.4px]">
          {loading ? "Analisando..." : "Analisar Deck"}
        </span>
      </span>
    </button>
  );
}