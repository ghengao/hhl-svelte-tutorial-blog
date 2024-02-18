## Problem

- Be able to create svelte component and put them into markdown files
- Be able to override the default behavior of the mdsvex generated html and customize them.

## Adding Svelte Components to Markdown

```markdown
---
title: First Post
---

# This is a markdown file

<script>
  import Readme from '../readme.md'
</script>

<Readme />
```

## Customizing the mdsvex generated html
> Layout components receive all frontmatter values as props, which should provide a great deal of flexibility when designing your layouts.

```ts
// sevelte.config.js
const mdsvexOptions = {
	...
	layout: {
		_: './src/mdsvex.svelte'
	},
	...
};
```