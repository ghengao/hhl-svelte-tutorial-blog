# Project Setup

## Dependencies

- [Open Props](https://open-props.style/): A design token based css framework that utilizing css variables
- [Lucide](https://lucide.dev/): A set of simply beautiful open-source icons that also supports svelte.
- [FontSource](https://fontsource.org/): A font source that provides a variety of fonts that can be used in the project.

To install these dependencies, you can use the following command:

```bash
pnpm install open-props lucide @fontsource/manrope @fontsource/jetbrains-mono
```

## Dev Dependencies

- [PostCSS](https://postcss.org/): A tool for transforming CSS with JavaScript.

To install these dependencies, you can use the following command:

```bash
pnpm install -D postcss
```

## Other

Besides these declared dependencies, the project also uses the following resources:

- [Fav Farm](https://fav.farm/): A free favicon generator that can be used to generate favicons for the project.


## Issues
When setup with `pnpm`, the project has two issues
1. `app.html` has some HTML warnings about the title and meta tags. It is fixed with
```html
		<title>Your Title Here</title>
		<meta name="description" content="Your description here">
		<meta name="keywords" content="keyword1, keyword2, keyword3">
```
2. `app.html` has a warning about the inline styling display, fixed with removing the styles
```html
<div style="display: contents">%sveltekit.body%</div>
```
```html
<div>%sveltekit.body%</div>
```
3. `tsconfig.json` has some warnings about
```json
// Cannot write file to `./.svelte-kit/tsconfig.json` because it would overwrite the project's source file
{
    "extends": "./tsconfig.base.json",
}
```
And
```json
//Cannot write to `svelte.config.js` because it would overwrite the project's source file
{
    "moduleResolution": "bundler"
}
```
This is introduced by adding code to `src/lib/config.ts`
```typescript
import { dev } from '$app/environment';

export const title = 'SvelteBlog';
export const description = 'Learn to use Build And Deploy A SvelteKit Markdown Blog';
export const url = dev ? 'http://localhost:3000' : 'https://svelteblog.realwebsite.com';
```

And fixed by adding export to the `index.ts`

```typescript
export { default as config } from './config';
```