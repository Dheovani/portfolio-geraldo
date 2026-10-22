# Prof. Geraldo Justiniano — protótipo

Website institucional em desenvolvimento. O conteúdo e as condições comerciais ainda serão revisados com o professor.

## Desenvolvimento local

```sh
bun install
bun run dev
```

## Publicação no GitHub Pages

O workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) compila e publica a pasta `dist` em cada push na branch `main`.

O repositório já usa **GitHub Actions** como fonte de publicação. Para atualizar o protótipo, envie alterações à branch `main` e aguarde o workflow **Publish prototype to GitHub Pages**. Endereço: `https://dheovani.github.io/portfolio-geraldo/`.

O build usa `/portfolio-geraldo/` apenas no GitHub Pages; o servidor local continua na raiz.

Antes de divulgar publicamente, confirme o direito de uso da imagem do cabeçalho indicada em [`ASSET_SOURCES.md`](ASSET_SOURCES.md).
