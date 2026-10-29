# Adega Primeiro Clima — GitHub Pages

Site estático de catálogo para a Adega Primeiro Clima, feito com HTML, CSS e JavaScript puro para ser publicado no GitHub Pages.

## O que funciona
- Catálogo ampliado com 60 itens de marcas reais: cervejas, vodkas, whiskies, gin, rum, cachaça, tequila, vinhos, espumantes, bebidas prontas, energéticos, refrigerantes e águas.
- Cada produto tem uma imagem associada por nome de arquivo no Wikimedia Commons; como os arquivos externos podem mudar ou ter nomes diferentes, revise as fotos carregadas antes de publicar comercialmente.
- Layout responsivo para celular e computador.
- Aviso de idade 18+ por sessão.
- Catálogo, busca, filtros por categoria e ordenação.
- Sacola com quantidades e total estimado.
- Persistência local usando `localStorage`.
- Painel local para importar/exportar catálogo JSON.
- Consulta de pedido por WhatsApp após configurar o número no `script.js`.

## Publicar no GitHub Pages
1. Baixe e extraia os arquivos.
2. Abra o repositório `AdegaPrimeiroClima` no GitHub.
3. Faça upload/substitua `index.html`, `style.css`, `script.js` e `README.md` na raiz do branch `main`.
4. Vá em **Settings → Pages**.
5. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main` e pasta `/(root)`.
6. Salve e aguarde o GitHub publicar.

O endereço esperado será `https://joaozinhoprogramas244.github.io/AdegaPrimeiroClima/` depois de habilitar Pages. A publicação não é automática por este pacote; é necessário enviar os arquivos à sua conta.

## Configurar WhatsApp
Abra `script.js` e altere a linha:
```js
const WHATSAPP_NUMBER = "";
```
Use código do país + DDD + telefone, somente números, por exemplo `5511999999999`. Não deixe um número de exemplo em produção.

## Importante
- O catálogo inclui marcas reais, mas os preços são apenas exemplos e não representam cotação atual. Confira disponibilidade, valores, tamanhos e imagens de cada item antes de publicar comercialmente. As imagens são carregadas de fontes externas e exigem internet.
- As imagens são ilustrativas e dependem de conexão à internet.
- O GitHub Pages hospeda somente arquivos estáticos. A sacola e o painel salvam dados apenas no navegador atual; não existe backend, autenticação real, estoque compartilhado, checkout ou pagamento.
- Não use o painel local como sistema de estoque de produção. Para pedidos e dados sincronizados, será necessário backend hospedado separadamente.
- A confirmação de idade não substitui controles legais de venda e entrega.
