import Image from "next/image";
import { WhatsAppIcon, WhatsAppLink } from "@/components/cta-link";
import { conditions, deliveries, faq, messages, steps } from "@/content/landing";
import fotoLateral from "@/assets/ig/promax-caixa-lateral.jpg";
import fotoLavanda from "@/assets/ig/promax-mao-lavanda.jpg";

const container = "mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10";

export function RealPhotos() {
  return (
    <section aria-labelledby="fotos-title" className={`${container} py-20 lg:py-28`}>
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-4 lg:pt-10">
          <h2 id="fotos-title" className="text-2xl font-medium leading-snug sm:text-3xl">
            O aparelho que chegou à loja, sem render.
          </h2>
          <p className="mt-4 max-w-[38ch] leading-relaxed text-bordo/75">
            Fotos do 18 Pro Max lacrado, publicadas pela Scheffer Store no dia da chegada. É o modelo que a loja
            vende.
          </p>
        </div>
        <figure className="lg:col-span-5">
          <Image
            src={fotoLavanda}
            alt="Mão segurando a caixa lacrada do iPhone 18 Pro Max contra parede cinza"
            placeholder="blur"
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="aspect-[3/4] h-auto w-full object-cover"
          />
        </figure>
        <figure className="w-2/3 justify-self-end lg:col-span-3 lg:w-full lg:self-end">
          <Image
            src={fotoLateral}
            alt="Lateral da caixa do iPhone 18 Pro Max com a inscrição iPhone"
            placeholder="blur"
            sizes="(min-width: 1024px) 22vw, 66vw"
            className="aspect-[3/4] h-auto w-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
}

export function Conditions() {
  return (
    <section id="condicoes" aria-labelledby="condicoes-title" className="bg-bordo text-nevoa">
      <div className={`${container} py-20 lg:py-28`}>
        <h2 id="condicoes-title" className="font-wide max-w-[18ch] text-[clamp(1.9rem,4.4vw,3.4rem)] font-semibold leading-none tracking-[-0.02em]">
          O que vem junto com a caixa.
        </h2>
        <dl className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {conditions.map((c) => (
            <div key={c.title} className="border-t border-cobre pt-5">
              <dt className="text-lg font-medium">{c.title}</dt>
              <dd className="mt-2 leading-relaxed text-nevoa/70">{c.text}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-16 flex flex-col gap-4 border-t border-nevoa/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[48ch] text-nevoa/80">
            Quer usar seu iPhone atual como parte do pagamento? Mande o modelo e o estado do aparelho para avaliação.
          </p>
          <WhatsAppLink
            message={messages.tradeIn}
            cta="troca"
            className="inline-flex h-12 shrink-0 items-center gap-2 self-start rounded-full border border-nevoa/40 px-6 text-sm font-medium transition-colors hover:bg-nevoa hover:text-bordo sm:self-auto"
          >
            <WhatsAppIcon className="size-4" />
            Avaliar meu aparelho
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}

export function Deliveries() {
  return (
    <section aria-labelledby="entregas-title" className={`${container} py-20 lg:py-28`}>
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 id="entregas-title" className="text-2xl font-medium leading-snug sm:text-3xl">
            Entregas que a loja mostra no Instagram.
          </h2>
          <p className="mt-4 max-w-[40ch] leading-relaxed text-bordo/75">
            Unboxings gravados com clientes na hora da entrega. Assista no perfil e veja como é receber o aparelho.
          </p>
          <a
            href="https://www.instagram.com/scheffer.store/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block border-b border-cobre pb-1 font-medium transition-colors hover:text-cobre-ink"
          >
            Ver o perfil @scheffer.store
          </a>
        </div>
        <ul className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-6 lg:col-start-7">
          {deliveries.map((d, i) => (
            <li key={d.href} className={i === 1 ? "pt-12" : ""}>
              <a
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <span className="sr-only">Assistir no Instagram o unboxing do </span>
                <div className="overflow-hidden">
                  <Image
                    src={d.image}
                    alt=""
                    placeholder="blur"
                    sizes="(min-width: 1024px) 24vw, 50vw"
                    className="aspect-[9/16] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-3 text-sm font-medium">{d.model}</p>
                <p className="text-sm text-bordo/75">{d.date}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HowToBuy() {
  return (
    <section id="como-comprar" aria-labelledby="comprar-title" className="border-t border-bordo/10 bg-papel">
      <div className={`${container} py-20 lg:py-28`}>
        <h2 id="comprar-title" className="font-wide text-[clamp(1.9rem,4.4vw,3.4rem)] font-semibold leading-none tracking-[-0.02em]">
          Como comprar
        </h2>
        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <li key={s.title} className="grid grid-cols-[auto_1fr] gap-x-5 md:block">
              <span aria-hidden="true" className="font-wide text-5xl font-semibold leading-none text-cobre md:text-6xl">
                {i + 1}
              </span>
              <div className="md:mt-6">
                <h3 className="text-lg font-medium">{s.title}</h3>
                <p className="mt-2 max-w-[34ch] leading-relaxed text-bordo/75">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-title" className={`${container} py-20 lg:py-28`}>
      <div className="grid gap-10 lg:grid-cols-12">
        <h2 id="duvidas-title" className="text-2xl font-medium leading-snug sm:text-3xl lg:col-span-4">
          Dúvidas antes de comprar
        </h2>
        <div className="divide-y divide-bordo/15 border-y border-bordo/15 lg:col-span-8">
          {faq.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-medium [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden="true"
                  className="relative size-4 shrink-0 before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-current after:absolute after:inset-y-0 after:left-1/2 after:w-px after:bg-current after:transition-transform group-open:after:scale-y-0"
                />
              </summary>
              <p className="max-w-[60ch] pb-6 leading-relaxed text-bordo/75">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
