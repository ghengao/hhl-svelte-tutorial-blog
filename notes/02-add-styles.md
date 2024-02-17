# Add Styles

## Add Master Styles with PostCSS and Open Props

1. Create a new file in the `src` directory called `app.pcss`.

```css
@import 'open-props/style';
@import 'open-props/normalize';
@import 'open-props/buttons';
```

2. Imported into the `+layout.svelte` file.

```typescript
<script>
    import "../app.pcss"
</script>

<slot />
```