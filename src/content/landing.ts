// Conteúdo comercial da landing. Cada afirmação tem origem em publicação do
// perfil @scheffer.store (data indicada). Não adicionar preços, prazos ou
// condições sem confirmação da loja.
import type { StaticImageData } from "next/image";

import corBordo from "@/assets/ig/cor-bordo.jpg";
import corGlacial from "@/assets/ig/cor-glacial.jpg";
import corPrateado from "@/assets/ig/cor-prateado.jpg";
import corPreto from "@/assets/ig/cor-preto.jpg";
import entrega256 from "@/assets/ig/entrega-17pm-256.jpg";
import entregaLaranja from "@/assets/ig/entrega-17pm-laranja.jpg";

export const messages = {
  hero: "Olá! Vi o site da Scheffer Store e quero consultar o iPhone 18 Pro Max: cores, capacidades e condições disponíveis.",
  general: "Olá! Vim pelo site da Scheffer Store e tenho uma dúvida sobre o iPhone 18.",
  tradeIn:
    "Olá! Quero usar meu iPhone atual como parte do pagamento do iPhone 18. Como funciona a avaliação?",
  color: (model: string, color: string) =>
    `Olá! Quero consultar o iPhone ${model} na cor ${color}. Quais capacidades vocês têm hoje e quais as condições?`,
};

// Cores oficiais divulgadas pela loja em 09/09/2026.
export type ColorOption = {
  id: string;
  name: string;
  swatch: string;
  stage: string;
  ink: "light" | "dark";
  image: StaticImageData;
};

export const colors: ColorOption[] = [
  { id: "bordo", name: "Bordô", swatch: "#5a1a33", stage: "#3a1022", ink: "light", image: corBordo },
  { id: "glacial", name: "Glacial", swatch: "#b3c2e6", stage: "#a9b8de", ink: "dark", image: corGlacial },
  { id: "prateado", name: "Prateado", swatch: "#d9d9dc", stage: "#cfcfd2", ink: "dark", image: corPrateado },
  { id: "preto", name: "Preto", swatch: "#26262a", stage: "#1d1d20", ink: "light", image: corPreto },
];

export const models = ["18 Pro", "18 Pro Max"] as const;

export const timeline = [
  { date: "03.09", text: "Começa a contagem regressiva no perfil da loja." },
  { date: "09.09", text: "Apple apresenta a linha 18 Pro em Bordô, Glacial, Prateado e Preto." },
  { date: "29.09", text: "O 18 Pro Max chega lacrado à Scheffer Store." },
];

export const conditions = [
  { title: "Lacrado", text: "O aparelho sai da caixa original, aberta por você." },
  { title: "1 ano de garantia Apple", text: "Cobertura oficial da Apple a partir da compra." },
  { title: "Até 18x no cartão", text: "Simulação do parcelamento feita no atendimento." },
  { title: "Atendimento personalizado", text: "Você conversa com a equipe da loja, do orçamento à entrega." },
];

export const deliveries = [
  {
    image: entrega256,
    model: "iPhone 17 Pro Max 256 GB",
    date: "29 de setembro de 2026",
    href: "https://www.instagram.com/scheffer.store/reel/Dd48iibR6Q8/",
  },
  {
    image: entregaLaranja,
    model: "iPhone 17 Pro Max Laranja-cósmico",
    date: "24 de julho de 2026",
    href: "https://www.instagram.com/scheffer.store/reel/DbLpvHqR13S/",
  },
];

export const steps = [
  { title: "Chame no WhatsApp", text: "Diga o modelo, a cor e a capacidade que você procura." },
  { title: "Receba o valor do dia", text: "A equipe passa o preço à vista e parcelado e confirma o que tem em estoque." },
  { title: "Feche e receba", text: "Confirme o pagamento e combine com a equipe como receber o aparelho." },
];

export const faq = [
  {
    q: "Os aparelhos são lacrados?",
    a: "Sim. O iPhone 18 Pro Max vendido pela Scheffer Store é lacrado, na caixa original.",
  },
  {
    q: "Qual é a garantia?",
    a: "1 ano de garantia Apple.",
  },
  {
    q: "Por que o preço não está no site?",
    a: "Preço e estoque mudam com frequência no lançamento. Pelo WhatsApp você recebe o valor atualizado, à vista e parcelado, para a cor e a capacidade que escolher.",
  },
  {
    q: "Posso parcelar?",
    a: "Sim, em até 18x no cartão de crédito. As condições de cada parcela são informadas no atendimento.",
  },
  {
    q: "Posso usar meu iPhone atual como parte do pagamento?",
    a: "A loja já recebe aparelhos usados como parte do pagamento. O valor depende da avaliação do seu aparelho, feita no atendimento.",
  },
  {
    q: "Vocês vendem outros modelos?",
    a: "Sim. Além da linha 18, a loja trabalha com outros iPhones, iPads e acessórios. Pergunte pelo modelo que você procura.",
  },
  {
    q: "Onde fica a loja?",
    a: "Em Porto Velho (RO). Os detalhes de retirada e entrega são combinados no atendimento.",
  },
];
