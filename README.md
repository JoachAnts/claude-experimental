# claude-experimental

A minimal "Hello, world!" React app, built with [Vite](https://vite.dev/).

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Deployment

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the app and publishes it to GitHub Pages.

Before the first deploy, enable Pages for this repository under
**Settings → Pages → Build and deployment → Source: GitHub Actions**.
Once enabled, the site is published at:

https://joachants.github.io/claude-experimental/
