# Adega Digital — catálogo ampliado

## Arquivos
- `index.html`: estrutura do site
- `style.css`: visual responsivo escuro/dourado
- `script.js`: catálogo ampliado, busca, filtros, sacola, exportação/importação JSON e gate de idade

## Publicar no GitHub Pages
1. Faça backup dos arquivos atuais.
2. Envie os três arquivos para a raiz do repositório, substituindo os existentes.
3. Confirme que o repositório tem `index.html` na raiz.
4. Em Settings → Pages, use Deploy from a branch, `main`, `/(root)`.
5. Aguarde a publicação.

## Observações importantes
- Catálogo contém produtos e preços de demonstração; confirme preços, estoque, volume e disponibilidade antes de vender.
- As imagens incluídas são fotos ilustrativas por categoria, não necessariamente packshots exatos de cada SKU/marca. Para uso comercial, obtenha imagens de produto oficiais/licenciadas e substitua o campo `image` de cada item em `script.js`.
- A sacola e o painel administrativo funcionam localmente no navegador. Não existe backend, sincronização entre dispositivos, checkout, pagamento ou envio de pedidos nesta versão.
- O painel Admin permite exportar/importar catálogo JSON localmente; ele não é protegido por login e não deve ser tratado como painel de produção.
- O site inclui aviso para maiores de 18 anos. Não substitui verificação de idade adequada na venda/entrega.
