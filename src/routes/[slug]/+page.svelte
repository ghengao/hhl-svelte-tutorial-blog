<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published at {data.meta.date}</p>
	</hgroup>

	<div class="tags">
		{#each data.meta.tags as tag}
			<span class="surface-4">&num;{tag}</span>
		{/each}
	</div>

	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
	}

	hgroup {
		margin-bottom: 1.5rem;
	}

	h1 {
		text-transform: capitalize;
	}

	.tags {
		display: flex;
		gap: var(--size-3);
		margin-bottom: var(--size-3);
	}

	.tags span {
		padding: var(--size-1) var(--size-3);
		border-radius: var(--size-3);
	}

	.prose {
		margin: 0 auto;
	}
</style>
