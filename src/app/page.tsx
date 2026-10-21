import { FinalCta, Footer } from "@/components/closing";
import { ColorPicker } from "@/components/color-picker";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Launch } from "@/components/launch";
import { Conditions, Deliveries, Faq, HowToBuy, RealPhotos } from "@/components/sections";
import { StickyCta } from "@/components/sticky-cta";
import { site } from "@/config/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: `+${site.whatsappNumber}`,
  address: { "@type": "PostalAddress", addressLocality: site.city, addressRegion: site.state, addressCountry: "BR" },
  sameAs: [site.instagram],
};

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-bordo focus:px-4 focus:py-2 focus:text-nevoa"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Launch />
        <ColorPicker />
        <RealPhotos />
        <Conditions />
        <Deliveries />
        <HowToBuy />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
