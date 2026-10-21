# Scheffer Store: landing do iPhone 18 Pro / Pro Max

Landing de conversão para WhatsApp da Scheffer Store (Porto Velho, RO), baseada no perfil público [@scheffer.store](https://www.instagram.com/scheffer.store/).

## Rodar

```bash
npm install
npm run dev      # desenvolvimento
npm run build && npm run start   # produção local
npm run lint
```

Variável opcional: `NEXT_PUBLIC_SITE_URL` (URL pública, usada em canonical e Open Graph).

## Onde editar

| O quê | Arquivo |
|---|---|
| WhatsApp, cidade, Instagram | `src/config/site.ts` |
| Textos, cores, FAQ, mensagens pré-preenchidas | `src/content/landing.ts` |
| Imagens | `src/assets/ig/` e `src/app/opengraph-image.jpg` |

Todos os CTAs têm `data-cta` e enviam `{ event: "whatsapp_click", cta }` para `window.dataLayer` se ele existir. Nenhum tracker vem instalado.

## Origem do conteúdo

Cada condição comercial vem de publicação da loja:

- Lacrado e 1 ano de garantia Apple: post de 29/09/2026.
- Até 18x no cartão: posts de 03/09/2026 e 02/07/2026.
- Usado como parte do pagamento: post de 02/07/2026, de uma campanha. **Confirmar se continua valendo.**
- Cores da linha 18 Pro (Bordô, Glacial, Prateado, Preto) e câmera de 48 MP com abertura variável: post de 09/09/2026.

## Pendências com a loja

1. Uso das fotos do Instagram autorizado pela loja (out/2026). As imagens da seção de cores são renders de pré-lançamento e aparecem marcadas como ilustrativas.
2. Logo oficial em vetor. Hoje o wordmark é recriado em texto (`src/components/wordmark.tsx`).
3. Confirmar se aceita usado na troca, se faz entrega fora de Porto Velho e o endereço ou ponto de retirada.
4. Domínio final e `NEXT_PUBLIC_SITE_URL`.
5. Fotos reais das outras cores quando chegarem ao estoque.
