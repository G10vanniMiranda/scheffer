"use client";

import Image from "next/image";
import { useState } from "react";
import { WhatsAppIcon, WhatsAppLink } from "@/components/cta-link";
import { colors, messages, models } from "@/content/landing";

export function ColorPicker() {
  const [colorId, setColorId] = useState(colors[0].id);
  const [model, setModel] = useState<(typeof models)[number]>("18 Pro Max");
  const color = colors.find((c) => c.id === colorId) ?? colors[0];
  const light = color.ink === "light";

  return (
    <section
      id="cores"
      aria-labelledby="cores-title"
      className={`transition-colors duration-700 ${light ? "text-nevoa" : "text-bordo"}`}
      style={{ backgroundColor: color.stage }}
    >
      <div className="mx-auto grid max-w-[1320px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-6 lg:px-10 lg:py-24">
        <div className="lg:col-span-5 lg:self-center">
          <h2 id="cores-title" className="font-wide text-[clamp(1.9rem,4.4vw,3.4rem)] font-semibold leading-none tracking-[-0.02em]">
            Quatro cores.
            <br />
            Escolha a sua.
          </h2>
          <p className={`mt-5 max-w-[40ch] leading-relaxed ${light ? "text-nevoa/80" : "text-bordo/75"}`}>
            A linha 18 Pro saiu em Bordô, Glacial, Prateado e Preto, com câmera principal de 48 MP e abertura
            variável. Escolha modelo e cor e pergunte o que a loja tem hoje.
          </p>

          <fieldset className="mt-9">
            <legend className="text-sm font-medium">Modelo</legend>
            <div className="mt-3 inline-flex rounded-full border border-current/30 p-1">
              {models.map((m) => (
                <label
                  key={m}
                  className={`cursor-pointer rounded-full px-5 py-2 text-sm transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-cobre ${
                    model === m ? (light ? "bg-nevoa text-bordo" : "bg-bordo text-nevoa") : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="modelo"
                    value={m}
                    checked={model === m}
                    onChange={() => setModel(m)}
                    className="sr-only"
                  />
                  iPhone {m}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-7">
            <legend className="text-sm font-medium">
              Cor: <span className="font-normal">{color.name}</span>
            </legend>
            <div className="mt-3 flex gap-4">
              {colors.map((c) => (
                <label
                  key={c.id}
                  title={c.name}
                  className={`relative grid size-12 cursor-pointer place-items-center rounded-full border transition-[border-color,transform] hover:scale-105 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-cobre ${
                    c.id === colorId ? "border-current" : "border-transparent"
                  }`}
                >
                  <input
                    type="radio"
                    name="cor"
                    value={c.id}
                    checked={c.id === colorId}
                    onChange={() => setColorId(c.id)}
                    className="sr-only"
                  />
                  <span className="sr-only">{c.name}</span>
                  <span
                    aria-hidden="true"
                    className="size-9 rounded-full ring-1 ring-black/15"
                    style={{ backgroundColor: c.swatch }}
                  />
                </label>
              ))}
            </div>
          </fieldset>

          <WhatsAppLink
            message={messages.color(model, color.name)}
            cta={`cor-${color.id}`}
            className={`mt-10 inline-flex h-14 items-center gap-3 rounded-full px-7 font-medium transition-[background-color,color,transform] active:scale-[0.98] ${
              light ? "bg-nevoa text-bordo hover:bg-white" : "bg-bordo text-nevoa hover:bg-ameixa"
            }`}
          >
            <WhatsAppIcon />
            Consultar o {model} {color.name}
          </WhatsAppLink>
        </div>

        <figure className="order-first lg:order-none lg:col-span-7">
          <div className="relative aspect-[1254/670] overflow-hidden">
            {colors.map((c) => (
              <Image
                key={c.id}
                src={c.image}
                alt={c.id === colorId ? `Ilustração do iPhone 18 Pro na cor ${c.name}` : ""}
                aria-hidden={c.id !== colorId}
                placeholder="blur"
                sizes="(min-width: 1024px) 56vw, 100vw"
                className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out ${
                  c.id === colorId ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
                }`}
              />
            ))}
          </div>
          <figcaption className={`mt-3 text-xs ${light ? "text-nevoa/75" : "text-bordo/80"}`}>
            Imagens ilustrativas publicadas pela loja antes do lançamento. Cores em estoque confirmadas no atendimento.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
