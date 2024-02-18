## Prism
> https://prismjs.com/, what mdsvex uses for default syntax highlighting
> https://github.com/PrismJS/prism-themes

t works by tokenized the highlighted code created span for each and apply css for them.

## Shiki
> https://shiki.style/
> VSCode's syntax highlighter, used by SvelteKit for server-side syntax highlighting

```sh
pnpm add -D shiki
```

To plugin it into the `mdsvex` we have to add a custom highlight function via the `highlighter` property in the `svelte.config.js` file.

```js
/** @type {import('mdsvex').MdsvexCompileOptions} **/
const mdsvexOptions = {
	extensions: ['.svx', '.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			// Use shiki to convert markdown code to html
			const html = await codeToHtml(code, {lang, theme: 'poimandres'});
			// Need to escape the html to use it in svelte
			const escHtml = escapeSvelte(html);
			// Need to wrap the html in a svelte {@html} tag to bypass svelte's html sanitization
			return `{@html \`${escHtml}\`}`;
		}
	}
};
```


## Shiki TwoSlash
> Add tooltip to the shiki syntax highlighted code
> https://github.com/shikijs/twoslash
> https://shikijs.github.io/twoslash/