# Introduction

This is a svelte app that created for learning purposes when going through the tutorial from [Build And Deploy A SvelteKit Markdown Blog](https://www.youtube.com/watch?v=RhScu3uqGd0). The related blog post for this tutorial can be found in [here](https://joyofcode.xyz/sveltekit-markdown-blog#project-setup).

## Project Setup

### Dependencies

- [Open Props](https://open-props.style/): A design token based css framework that utilizing css variables
- [Lucide](https://lucide.dev/): A set of simply beautiful open-source icons that also supports svelte.
- [FontSource](https://fontsource.org/): A font source that provides a variety of fonts that can be used in the project.

To install these dependencies, you can use the following command:

```bash
pnpm install open-props lucide @fontsource/manrope @fontsource/jetbrains-mono
```

# Contribution

Once you've created a project and installed dependencies with `pnpm install`

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

# Deployment

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
