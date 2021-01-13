# PHP - Getting Started

Material Design Icons can be used in PHP or Twig using a simple helper class.

Add `@mdi/svg` npm package to your project:

```bash
yarn add @mdi/svg

# or, using npm
npm install @mdi/svg
```

Add mesavolt/mdi-php package to your project:

```bash
composer require mesavolt/mdi-php
```

[MaterialDesignIcons-PHP on GitHub](https://github.com/chteuchteu/MaterialDesignIcons-PHP)

## Usage

If you didn't install the icons pack using one of the methods above, you can globally configure the icons location. This should be done once and before the first usage of the `Mdi::mdi` function.

```php
Mdi::withIconsPath(__DIR__.'/../../../node_modules/@mdi/svg/svg/');
```

Use it in your views:

```php
<button>
    <?php echo Mdi::mdi('account'); ?>
    My account
</button>
```

The `mdi` function provides 4 arguments to customize its output:

 - the icon (you can provide either `account`, `mdi-account` or `mdi mdi-account`)
 - its class (`fill-muted` for instance)
 - its size (defaults to 24px)
 - some more attributes that will be added to the `<svg>` tag (`['aria-label' => 'My account']` for instance)

### Default attributes

You can add custom default attributes, or edit and remove the provided defaults.

| Attribute name | Default value                                  |
|----------------|------------------------------------------------|
| `viewBox`      | `0 0 24 24`                                    |
| `xmlns`        | `http://www.w3.org/2000/svg`                   |
| `width`        | Whatever size was specified (defaults to `24`) |
| `height`       | Whatever size was specified (defaults to `24`) |
| `role`         | `presentation`                                 |

```php
Mdi::withDefaultAttributes([
    'data-toggle' => 'tooltip',     // Add a new one
    'role' => 'img',                // Replace default `presentation` value with `img`
    'xmlns' => null,                // Remove default `xmlns` attribute
]);
```

## What about Twig?

Simply register `Mdi::mdi` as a Twig simple function and get started!

```php
$twigEnv->addFunction(new \Twig_SimpleFunction('mdi', [Mdi::class, 'mdi'], ['is_safe' => ['html']]));
```

```
<button>
    {{ mdi('account', 'fill-muted', 42, {'aria-label': 'My account icon'}) }}
    My account
</button>
```
