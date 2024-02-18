## Add the Prerender config

```ts
// src/routes/+layout.ts
export const prerender = true;

// api/posts/+server.ts
export const prerender = true;

```

## Vercel Adaptor

Remove the default adaptor

```sh
pnpm remove @sveltejs/adapter-auto
```

Add static adaptor

```sh
pnpm i -D @sveltejs/adapter-vercel
```

And change the `svelte.config.js` to use the static adaptor

```js
// svelte.config.js
import adapter from '@sveltejs/adapter-vercel';
...
```

## Build and Preview

```sh
pnpm run build && pnpm run preview
```