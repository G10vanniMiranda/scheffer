// Wordmark em texto, inspirado no logo da loja (SCHEFFER sobre filetes e STORE).
// Substituir pelo vetor oficial quando a loja enviar o arquivo.
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col items-center leading-none ${className}`}>
      <span className="font-wide text-[1.05em] font-medium tracking-[0.28em] pl-[0.28em]">SCHEFFER</span>
      <span className="mt-[0.3em] flex w-full items-center gap-[0.5em] text-[0.42em] tracking-[0.5em]">
        <span className="rule flex-1" />
        <span className="pl-[0.5em]">STORE</span>
        <span className="rule flex-1" />
      </span>
    </span>
  );
}
