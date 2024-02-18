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