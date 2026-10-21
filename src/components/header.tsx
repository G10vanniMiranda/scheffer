import { WhatsAppIcon, WhatsAppLink } from "@/components/cta-link";
import { Wordmark } from "@/components/wordmark";
import { messages } from "@/content/landing";

const nav = [
  { href: "#cores", label: "Cores" },
  { href: "#condicoes", label: "Condições" },
  { href: "#como-comprar", label: "Como comprar" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-bordo/10 bg-nevoa/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
        <a href="#topo" className="text-[15px] sm:text-base">
          <Wordmark />
        </a>
        <nav aria-label="Seções" className="hidden md:block">
          <ul className="flex gap-8 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="py-2 text-bordo/75 transition-colors hover:text-bordo">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <WhatsAppLink
          message={messages.general}
          cta="header"
          className="inline-flex h-10 items-center gap-2 rounded-full border border-bordo/25 px-4 text-sm font-medium transition-colors hover:border-bordo hover:bg-bordo hover:text-nevoa"
        >
          <WhatsAppIcon className="size-4" />
          WhatsApp
        </WhatsAppLink>
      </div>
    </header>
  );
}
