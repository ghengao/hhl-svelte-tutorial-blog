## Gochas
We want the theme to load before everything else loads otherwise we will see a flash of the default theme.


## Script Module with Local Storage

```html
<!doctype html>
<html lang="en">
	<head>
		...
		<script type="module">
			const theme = localStorage.getItem('color-scheme');
			if (theme) {
				document.documentElement.setAttribute('color-scheme', theme);
			} else {
				localStorage.setItem('color-scheme', 'light');
			}
		</script>
	</head>
    ...
</html>
```

## Event Listener

TODO

## Theme Toggle

Use svelte custom stores to store the theme state.

```ts
// $lib/theme.ts
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
```

Add theme toggle button component

```ts
// routes/toggle.svelte
<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Moon, Sun } from 'lucide-svelte';
	import { theme, toggleTheme } from '$lib/theme';
</script>

<button on:click={toggleTheme} aria-label="Toggle theme">
	{#if $theme === 'dark'}
		<div in:fly={{ y: 10, duration: 200 }}>
			<Sun />
			<span>Light</span>
		</div>
	{:else}
		<div in:fly={{ y: -10, duration: 200 }}>
			<Moon />
			<span>Dark</span>
		</div>
	{/if}
</button>


<style>
	button {
		padding: 0;
		font-weight: inherit;
		background: none;
		box-shadow: none;
		border: none;
		overflow: hidden;
	}
	button > div {
		display: flex;
		gap: var(--size-2)
	}
</style>
```

