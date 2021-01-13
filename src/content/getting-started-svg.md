# SVG - Getting Started

Scalable Vector Graphics can be used with the `<img />` or inlined in HTML. SVG is the preferred way consuming the icons for the web.

For users of NPM we provide all the icons as SVG files in the `@mdi/svg` package.

```bash
npm install @mdi/svg
```

## Image Tag

The `<img />` HTML element can display SVG files similar to how `PNG`, `JPG`, or `GIF`'s are loaded.

```html
<img src="path/to/account-circle.svg"/>
```

## Inline SVG

Inlining SVG allows one to include just the icons they need. This is done with the `<svg>` and `<path>` elements.

```html
<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" d="..." />
</svg>
```

### Styling SVG with CSS

```css
svg {
    width: 24px;
    height: 24px;
}
svg path {
    fill: red;
}
```

### Styling SVG with SASS

```scss
svg {
    width: 24px;
    height: 24px;
    path {
        fill: red;
    }
}
```

### Intro to CSS `em` and `rem`

Most themes are built around a `1rem` font size equivelent to `16px`.

Since the icons are natively pixel perfect at `24px` we could use the `width: 1.5rem` for a 24x24 icon size.