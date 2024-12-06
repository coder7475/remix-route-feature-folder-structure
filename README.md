# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.

### Manual Route Configuration

While the `app/routes` folder offers a convenient convention for developers, Remix appreciates that [one size doesn't fit all](https://remix.run/docs/ja/main/file-conventions/routes#disclaimer). There are times when the provided convention might not align with specific project requirements or a developer's preferences. In such cases, Remix allows for manual route configuration via [`vite.config.ts`](https://remix.run/docs/ja/main/file-conventions/vite-config#routes). This flexibility ensures developers can structure their application in a way that makes sense for their project.

If you have not yet migrated to [Vite](https://remix.run/docs/ja/main/guides/vite) and are still using the [Classic Remix Compiler](https://remix.run/docs/ja/main/guides/vite#classic-remix-compiler-vs-remix-vite), you can configure routes manually in your [`remix.config.js`](https://remix.run/docs/ja/main/file-conventions/remix-config) file.

A common way to structure an app is by top-level features folders. Consider that routes related to a particular theme, like concerts, likely share several modules. Organizing them under a single folder makes sense:

```text
app/
├── about/
│   └── route.tsx
├── concerts/
│   ├── card.tsx
│   ├── city.tsx
│   ├── favorites-cookie.ts
│   ├── home.tsx
│   ├── layout.tsx
│   ├── sponsored.tsx
│   └── trending.tsx
├── home/
│   ├── header.tsx
│   └── route.tsx
└── root.tsx
```

To configure this structure into the same URLs as the previous examples, you can use the `routes` function in `vite.config.ts`:

```
import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    remix({
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("/", "home/route.tsx", { index: true });
          route("about", "about/route.tsx");
          route("concerts", "concerts/layout.tsx", () => {
            route("", "concerts/home.tsx", { index: true });
            route("trending", "concerts/trending.tsx");
            route(":city", "concerts/city.tsx");
          });
        });
      },
    }),
  ],
});
```

Remix's route configuration approach blends convention with flexibility. You can use the `app/routes` folder for an easy, organized way to set up your routes. If you want more control, dislike the file names, or have unique needs, there's `vite.config.ts`. It is expected that many apps forgo the routes folder convention in favor of `vite.config.ts`.
