# Polymer - Getting Started

Install and import the `iron-icon` web component, as well as `mdi-svg` to get started!

```bash
bower install --save mdi-svg
bower install --save PolymerElements/iron-icon
```

## Using SVGs

Here's an example usage of how to use the `iron-icon` web component:

```html
<link rel="import" href="../bower_components/iron-icon/iron-icon.html">

<style is="custom-style">
  .big {
    --iron-icon-height: 32px;
    --iron-icon-width: 32px;
  }
</style>

<iron-icon class="big" src="/path/to/icons/example-icon.svg"></iron-icon>
```

## Using `mdi-iconset-svg`

[![View `mdi-iconset-svg` on WebComponents.org](https://img.shields.io/badge/webcomponents.org-mdi--iconset--svg-blue.svg)](https://www.webcomponents.org/element/kriss-kross-io/mdi-iconset-svg "View the web component at webcomponents.org")

Use the `icon` attribute of the `iron-icon` web component and specify the namespace of the icon, as well as the icon itself:

```
bower install --save kriss-kross-io/mdi-iconset-svg
bower install --save PolymerElements/iron-icon
```

```html
<link rel="import" href="../bower_components/iron-icon/iron-icon.html">
<link rel="import" href="../bower_components/mdi-iconset-svg/mdi-logo-iconset-svg.html">

<iron-icon icon="mdi-logo:polymer"></iron-icon>
```

The iconset has duplicate icons, and it's not recommended to import all the icons.
Visit the [demo page](https://www.webcomponents.org/element/kriss-kross-io/mdi-iconset-svg/demo/demo/index.html) of the `mdi-iconset-svg` web component to view all the icons and namespaces.

Alternatively, you can create your own iconset with only the required icons. [MDI Polymer Iconset Generator](https://mdi-poly-icon.appspot.com/) includes all icons from `mdi-iconset-svg`.

1. Visit <https://mdi-poly-icon.appspot.com> in your browser.
2. Select the icons you want to use in your app.
3. Download the optimized `<iron-iconset-svg>` markup and create an HTML import for it.
4. Load the import in your app and start using the icons!
