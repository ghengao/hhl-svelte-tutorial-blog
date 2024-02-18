## Abstract Syntax Tree

- [How to Modify Nodes in an Abstract Syntax Tree | CSS-Tricks](https://css-tricks.com/how-to-modify-nodes-in-an-abstract-syntax-tree/)

## Markdown Plugins

- [Remark](https://github.com/remarkjs/remark): Transform the markdown using AST.
- [Rehype](https://github.com/rehypejs/rehype): Transform the HTML using AST.

## Install plugins
```sh
pnpm i -D remark-unwrap-images rehype-slug remark-toc
```

### Configure Plugins
```ts
// svelte.config.js

import remarkUnwrapImages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

/** @type {import('mdsvex').MdsvexCompileOptions} **/
const mdsvexOptions = {
	...
	remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug],
};
```

### Add Table of Contents

```md
// src/contents/posts/first-post.md
---
title: First Post
...
---

## Table of Contents

## Description
...

## Introduction
...

```