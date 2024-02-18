import adapter from '@sveltejs/adapter-auto';
import { escapeSvelte, mdsvex } from 'mdsvex';
import {codeToHtml} from 'shiki';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('mdsvex').MdsvexCompileOptions} **/
const mdsvexOptions = {
	extensions: ['.svx', '.md'],
	layout: {
		_: 'src/mdsvex.svelte'
	},
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

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
