# Adega Primeiro Clima — site estático para GitHub Pages

Projeto de catálogo e pedidos para uma adega de bairro, sem backend.

## O que está incluído
- Layout responsivo para celular, tablet e desktop.
- Catálogo com **120 produtos cadastrados** em 11 categorias.
- Busca por nome/marca, filtros e ordenação.
- Fotos procuradas em lote por categoria na base pública Open Food Facts (para evitar dezenas de buscas individuais e respeitar o limite de consultas). A imagem só substitui a ilustração quando marca e nome têm correspondência razoável; quando não há foto confiável, a imagem da categoria permanece identificada como ilustrativa. Resultados ficam em cache local por 7 dias.
- Sacola com quantidades e subtotal estimado.
- Montagem do pedido e envio por WhatsApp.
- Tela administrativa local para adicionar/excluir produtos e importar/exportar catálogo JSON.
- Confirmação de maioridade, SEO básico, ícone e manifesto PWA.

## Configuração obrigatória antes de publicar
1. Abra `script.js`.
2. No início do arquivo, altere `WHATSAPP_NUMBER = ""` para o número comercial com código do país e DDD, somente números. Exemplo fictício: `5511999999999`.
3. Revise todos os preços e tamanhos no `catalog.js`. Os valores cadastrados são exemplos demonstrativos, não uma tabela de preços oficial.
4. Confira a disponibilidade e a imagem de cada produto. As fotos são carregadas de fonte externa quando disponíveis; o catálogo não baixa nem hospeda as fotos no repositório.

## Publicar no GitHub Pages
1. Envie todos os arquivos desta pasta para a raiz (`/`) do repositório.
2. No GitHub, abra **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Selecione a branch `main` e a pasta `/(root)`, depois salve.
5. Aguarde a publicação. O endereço esperado é `https://joaozinhoprogramas244.github.io/AdegaPrimeiroClima/`.

## Limitações importantes do GitHub Pages
GitHub Pages hospeda arquivos estáticos. Este projeto não possui banco de dados, login seguro, estoque sincronizado, painel administrativo compartilhado, pagamentos online, cálculo automático de frete nem processamento de pedidos. As alterações administrativas ficam no `localStorage` do navegador em que foram feitas. Pedidos são enviados para WhatsApp para confirmação manual. Para essas funções, será necessário integrar um backend ou serviço externo.

## Imagens
O site tenta localizar fotos de produtos por nome e marca na API pública Open Food Facts. A cobertura da base pode variar, e algumas bebidas podem não ter foto disponível. A imagem alternativa é identificada como ilustrativa. A disponibilidade da API e das imagens depende de terceiros e de conexão com a internet.


## Correção do carregamento das imagens
A busca agora é agrupada por categoria e limitada a uma requisição a cada 7,5 segundos. Isso evita disparar uma chamada para cada produto e reduz o risco de bloqueio por limite de consultas da API. O catálogo continua funcionando sem a API: as imagens ilustrativas são exibidas como alternativa e, se a imagem externa falhar, aparece um marcador visual no lugar de um ícone quebrado.
