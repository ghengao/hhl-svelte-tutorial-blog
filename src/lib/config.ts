// Common configuration for the entire site, put here to avoid repetition and can easily
// imported and used by different pages.
//
import { dev } from '$app/environment';

export const title = 'SvelteBlog';
export const description = 'Learn to use Build And Deploy A SvelteKit Markdown Blog';
export const url = dev ? 'http://localhost:3000' : 'https://svelteblog.realwebsite.com';
