
- [ ] Build the prerendered pages using vercel adaptor locally using node.js

Currently got the following error:

```sh
error during build:
Error: Unsupported Node.js version: v21.6.1. Please use Node 18 or Node 20 to build your project, or explicitly specify a runtime in your adapter configuration.
...
 ELIFECYCLE  Command failed with exit code 1.
```

- [ ] Change the CSS to use TailwindCSS instead of using open props for learning tailwindcss

- [ ] How to use the `static` adaptor to render the pages? How is `auto` adaptor different from `static` adaptor?

It make sense to not support static rendering for the pages that are on the `server` side. (+server.ts or +layout.ts). But it should be possible to prerender the pages statically when every content
is statically available in the build stage.


- [ ] The line height is still partial of the screen even the `height` is set 100% according to the tutorial. Need to fix this.
- [ ] Resolve some of the type errors inside these load functions.
- [ ] Figure out how to put the table of content as a `aside` element on the right side of the page.
- [ ] Figure out how to style properly for the syntax highlighting. Currently the width and padding seems to be off.
- [ ] Figure out how to add search functionalities statically/dynamically. What are the limitations.
- [ ] Design a content collection interface similar to `Astro`.
- [ ] Design a content frontmatter validation or typing similar to `Astro`.
- [ ] Add a exporter function allow export the HTML into `docx` or `pdf` format.