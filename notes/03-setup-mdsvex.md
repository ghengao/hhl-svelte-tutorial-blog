## Configure mdsvex

```ts
// svelte.config.js
import { mdsvex } from 'mdsvex'

/** @type {import('mdsvex').MdsvexCompileOptions} **/
const mdsvexOptions = {
	extensions: ['.svx', '.md'],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
    ...
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
};
```

## Add the markdown content inside the `src/contents/posts` folder

## Setup the Content Api Endpoint

```ts
// routes/api/posts/+server.ts
import { json } from "@sveltejs/kit";

async function getPosts() {
    let posts = []
    const paths = import.meta.glob('/src/contents/*/*.md', {eager: true});
    for (const path in paths) {
        const file = paths[path];
        const slug = path.split('/').pop()?.replace('.md', '');
        const metadata = file.metadata;
        const post = {...metadata, slug};
        post.published && posts.push(post);
    }
    ...
    return posts;
};

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    const posts = await getPosts();
    return json(posts);

}
```

## Setup the individual post rendering

### Dynamic Routing

```ts
// routes/[slug]/+page.ts
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../contents/posts/${params.slug}.md`);
		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		throw error(404, `Post not find ${params.slug}`);
	}
}
```

### Render Blog Html Header

> [Open Graph Protocol](https://ogp.me/): Turn your site into a rich object in a social graph.

```ts
// routes/posts/[slug].svelte
// Add title and og metadata to the head of the html using svelte
<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
</svelte:head>
```

### Render Blog Html Content

##### Article Section

##### Header Group

```html
<hgroup>
	<h1>{title}</h1>
	<h2>{subtitle}</h2>
</hgroup>
```

##### Tags

##### Prose

> a set of prose classes you can use to add beautiful typographic defaults to any vanilla HTML you don't control, like HTML rendered from Markdown, or pulled from a CMS

Render the markdown content using the `prose` class from the `@sveltejs/kit` package.

```html
<div class="prose">
	<svelte:component this="{data.content}" />
</div>
```
