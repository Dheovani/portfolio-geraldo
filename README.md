# Prof. Geraldo Justiniano dos Reis — protótipo

Website institucional em desenvolvimento. O conteúdo e as condições comerciais ainda serão revisados com o professor.

## Desenvolvimento local

```sh
bun install
bun run dev
```

## Publicação no GitHub Pages

O workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) compila e publica a pasta `dist` em cada push na branch `main`.

O repositório usa **GitHub Actions** como fonte de publicação. O build usa a raiz `/` para funcionar em `https://geraldojustiniano.com/`.

O domínio `geraldojustiniano.com` já está configurado em **Settings → Pages → Custom domain**. Depois de enviar as alterações à branch `main`:

1. No provedor de DNS, configure quatro registros `A` para o domínio raiz (`@`): `185.199.108.153`, `185.199.109.153`, `185.199.110.153` e `185.199.111.153`.
2. Mantenha `www` como `CNAME` para `dheovani.github.io` e, quando estiver disponível, ative **Enforce HTTPS** no Pages.

Com o domínio raiz configurado no Pages, o GitHub redireciona `www` para ele. Como a publicação usa GitHub Actions, nenhum arquivo `CNAME` é necessário no repositório.

Antes de divulgar publicamente, confirme o direito de uso da imagem do cabeçalho indicada em [`ASSET_SOURCES.md`](ASSET_SOURCES.md).
