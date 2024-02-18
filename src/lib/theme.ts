import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

const userTheme = browser && (localStorage.getItem('color-scheme') as Theme);

export const theme = writable<Theme>(userTheme || 'light');

export function toggleTheme() {
	theme.update((current) => {
		const next = current === 'light' ? 'dark' : 'light';
		document.documentElement.setAttribute('color-scheme', next);
		localStorage.setItem('color-scheme', next);
		return next;
	});
}

export function setTheme(newTheme: Theme) {
	theme.set(newTheme);
}
