// Dados da loja confirmados no perfil público @scheffer.store (out/2026).
// Altere aqui: todos os CTAs e metadados leem deste arquivo.

export const site = {
  name: "Scheffer Store",
  description:
    "iPhone 18 Pro e 18 Pro Max lacrados, com 1 ano de garantia Apple, em Porto Velho (RO). Consulte cores, capacidades e condições pelo WhatsApp.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  city: "Porto Velho",
  state: "RO",
  instagram: "https://www.instagram.com/scheffer.store/",
  instagramHandle: "@scheffer.store",
  // Formato internacional sem símbolos: 55 + DDD + número.
  whatsappNumber: "5569999056778",
  whatsappDisplay: "(69) 9 9905-6778",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
