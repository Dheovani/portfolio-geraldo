# Prof. Geraldo Justiniano — protótipo

Website institucional em desenvolvimento. O conteúdo e as condições comerciais ainda serão revisados com o professor.

## Desenvolvimento local

```sh
bun install
bun run dev
```

## Publicação no GitHub Pages

O workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) compila e publica a pasta `dist` em cada push na branch `main`.

1. Envie a branch `main` para `https://github.com/Dheovani/portfolio-geraldo`.
2. Em **Settings → Pages → Build and deployment**, selecione **GitHub Actions** como fonte.
3. Aguarde o workflow **Publish prototype to GitHub Pages**. O endereço será `https://dheovani.github.io/portfolio-geraldo/`.

O build usa `/portfolio-geraldo/` apenas no GitHub Pages; o servidor local continua na raiz.

Antes de divulgar publicamente, confirme o direito de uso da imagem do cabeçalho indicada em [`ASSET_SOURCES.md`](ASSET_SOURCES.md).
