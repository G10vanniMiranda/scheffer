import Image from "next/image";
import { WhatsAppIcon, WhatsAppLink } from "@/components/cta-link";
import { messages } from "@/content/landing";
import heroPhoto from "@/assets/ig/promax-caixa-frente.jpg";

const proof = ["Lacrado", "1 ano de garantia Apple", "Até 18x no cartão"];
const display = "font-wide font-semibold leading-[0.95] tracking-[-0.02em] lg:text-[clamp(2.4rem,3.6vw,3.6rem)]";

export function Hero() {
  return (
    <section id="topo" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-[1320px] gap-y-8 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-12 lg:gap-x-6 lg:px-10 lg:pb-24 lg:pt-12">
        <h1
          id="hero-title"
          className={`${display} text-[clamp(2.1rem,7.4vw,4.6rem)] lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:self-start lg:pt-6`}
        >
          <span className="hero-line block">O iPhone 18 Pro&nbsp;Max</span>
          <span className="hero-line hero-line-2 block text-ameixa lg:sr-only">chegou em Porto&nbsp;Velho.</span>
        </h1>

        <figure className="hero-photo relative lg:col-span-4 lg:col-start-5 lg:row-span-2 lg:row-start-1">
          <Image
            src={heroPhoto}
            alt="Caixa lacrada do iPhone 18 Pro Max segurada na mão, em foto publicada pela Scheffer Store"
            placeholder="blur"
            preload
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="aspect-[4/5] h-auto w-full object-cover lg:aspect-[3/4.2]"
          />
          <figcaption className="mt-3 text-xs text-bordo/75">
            Foto da loja, publicada em 29 de setembro de 2026.
          </figcaption>
        </figure>

        <p
          aria-hidden="true"
          className={`${display} hero-line hero-line-2 hidden text-ameixa lg:col-span-4 lg:col-start-9 lg:row-start-2 lg:block lg:self-end`}
        >
          chegou em Porto&nbsp;Velho.
        </p>

        <div className="hero-line hero-line-3 max-w-[34rem] lg:col-span-4 lg:col-start-1 lg:row-start-2 lg:self-end">
          <p className="text-lg leading-relaxed text-bordo/80">
            A Scheffer Store já tem o novo Pro Max em mãos. Diga a cor e a capacidade que você quer e receba
            o valor do dia direto da equipe.
          </p>
          <WhatsAppLink
            message={messages.hero}
            cta="hero"
            className="mt-7 inline-flex h-14 items-center gap-3 rounded-full bg-bordo px-7 text-base font-medium text-nevoa transition-[background-color,transform] hover:bg-ameixa active:scale-[0.98]"
          >
            <WhatsAppIcon />
            Consultar disponibilidade
          </WhatsAppLink>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-bordo/75">
            {proof.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden="true" className="rule w-4" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
