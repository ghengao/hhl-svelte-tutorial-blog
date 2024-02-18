
## Create Layout load function

```ts
// src/routes/+layout.ts
export function load({ url }) {
	return {
		url: url.pathname
	};
}
```

## Wrap the html inside a key div

```ts
<script lang="ts">
	import { fade } from 'svelte/transition';
	export let url: string;
</script>

{#key url}
	<div class="transition" in:fade>
		<slot />
	</div>
{/key}
```


## Wrap the content inside the transition component

```ts
<script lang="ts">
	import PageTransition from './transition.svelte';

	export let data;
</script>
// src/routes/+layout.svelte
<div class="layout">

	<main>
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>
</div>s
```