import { WhatsAppIcon, WhatsAppLink } from "@/components/cta-link";
import { Wordmark } from "@/components/wordmark";
import { site } from "@/config/site";
import { messages } from "@/content/landing";

export function FinalCta() {
  return (
    <section aria-labelledby="final-title" className="bg-ameixa text-nevoa">
      <div className="mx-auto max-w-[1320px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <h2 id="final-title" className="font-wide max-w-[16ch] text-[clamp(2.1rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.02em]">
          Seu 18 Pro Max está a uma mensagem.
        </h2>
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
          <WhatsAppLink
            message={messages.hero}
            cta="final"
            className="inline-flex h-14 items-center gap-3 self-start rounded-full bg-nevoa px-7 font-medium text-bordo transition-[background-color,transform] hover:bg-white active:scale-[0.98]"
          >
            <WhatsAppIcon />
            Falar com a Scheffer Store
          </WhatsAppLink>
          <p className="text-nevoa/75">
            ou ligue para <a href={`tel:+${site.whatsappNumber}`} className="underline decoration-cobre underline-offset-4">{site.whatsappDisplay}</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-bordo pb-28 text-nevoa/70 md:pb-0">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-4 py-14 text-sm sm:px-6 md:grid-cols-3 lg:px-10">
        <div className="text-nevoa">
          <Wordmark className="text-lg" />
        </div>
        <address className="not-italic leading-relaxed">
          {site.city} – {site.state}
          <br />
          iPhones, iPads e acessórios
          <br />
          WhatsApp {site.whatsappDisplay}
        </address>
        <ul className="space-y-2">
          <li>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-nevoa">
              Instagram {site.instagramHandle}
            </a>
          </li>
          <li>
            <WhatsAppLink message={messages.general} cta="footer" className="hover:text-nevoa">
              Conversar no WhatsApp
            </WhatsAppLink>
          </li>
        </ul>
        <p className="text-xs leading-relaxed text-nevoa/65 md:col-span-3">
          Scheffer Store é uma revenda independente, sem vínculo com a Apple Inc. Apple e iPhone são marcas da Apple
          Inc. Imagens marcadas como ilustrativas não representam o estoque.
        </p>
      </div>
    </footer>
  );
}
