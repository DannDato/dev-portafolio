# Daniel Tovar — Professional Portfolio

Professional single-page portfolio for **Daniel Tovar**, Full-Stack JavaScript Developer.

## Stack

- React 19
- Vite
- React Icons
- Space Grotesk
- Plain responsive CSS

## Features

- Spanish / English interface with persistent language selection.
- Language-aware CV download.
- Responsive one-page layout.
- SEO metadata, Open Graph, Twitter Cards and Schema.org structured data.
- `robots.txt` and `sitemap.xml` for search engines.
- No router, UI framework or animation dependencies that are not used by the site.

## Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Main files

```text
src/
  App.jsx       # Content, language switching and page structure
  index.css     # Full visual system and responsive styles
  main.jsx      # React entry point
public/
  CV_Daniel_Tovar_ES.pdf
  CV_Daniel_Tovar_EN.pdf
  daniel-tovar.jpg
  icon.png
  robots.txt
  sitemap.xml
```

## SEO domain

Canonical URLs and social metadata currently target `https://dato.dannprod.com/`. If the portfolio is deployed under another domain, update `index.html`, `src/App.jsx`, `public/robots.txt` and `public/sitemap.xml`.

## Author

Daniel Tovar — Full-Stack JavaScript Developer  
daniel.tovar@dannprod.com  
GitHub: `@DannDato`
