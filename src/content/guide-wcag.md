# Web Content Accessibility Guidelines (WCAG) 2.0

## Basics

WCAG is developed through the W3C process in cooperation with individuals and organizations around the world, with a goal of providing a single shared standard for web content accessibility that meets the needs of individuals, organizations, and governments internationally.<sup><a href="#wcag-ref1">1</a></sup>

Here are a few tips for creating Accessible SVGs.

## Tips

### Vector (SVG) vs. Rastor (PNG)

For those designers reading this, you may understand the difference. But for those that don't, raster images, like PNG and JPG, are a pixel by pixel representation of an image. And vector images, like SVG's and fonts, generate images using math. This means, that no matter the scale of the image, a vector-based image will always be crisp. The goal is to always use vector-based images.

### Use inline SVGs

When the DOM is rendered on page load, the browser will create an Accessibility Tree. If you are using an image tag with the source pointing to an SVG, this will not be rendered in the Accessibility Tree. This will cause a problem with Assistive Technologies (AT) like screen readers and speech recognition tools. As an added bonus, this is one less HTTP request; making your site faster. 

If you are using HTML5, then you do not need to have the SVG DTD, just a version number on the SVG itself. SVG 1.1 utilizes the DOM level 2 specification for this.<sup><a href="wcag-ref2">2</a></sup>

``` html
<svg version="1.1" viewBox="0 0 24 24">
  <path fill="black" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
</svg>
```

### Include a title

Taking the example above, a screen reader will not say anything except maybe 'Graphic'. In order for <abbr title="Assistive Technologies">AT</abbr> to understand what the content is and how to utilize that information there has to be either a `title` element as the first child of the SVG, or either of the following attributes: `aria-label`, `aria-labelledby`. Let's modify the SVG from above to tell the <abbr title="Assistive Technologies">AT</abbr> what to expect. The following would read: 'Graphic, Chevron pointing down'. This is much more precise and conveys exactly what the end user needs to know. It is recommended to use both the `title` element as well as the ARIA attribute for consistent results.

``` html
<svg version="1.1" viewBox="0 0 24 24" aria-labelledby="svg-title">
  <title id="svg-title">Chevron pointing down</title>
  <path fill="black" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
</svg>
```

### Include a description

imagine the `desc` tag as the `alt` attribute on an `img` element. It's not just the name of the icon, but a description of the icon and possible actions to take. Again, the aforementioned icon is a chevron pointing down and could be inside of a button. When clicked, it will expand an accordion, and reveal content. We should let the <abbr title="Assistive Technologies">AT</abbr> know what the user should do. Now the following would read: 'Graphic, Chevron pointing down. Press the spacebar or enter key to expand the content'.

``` html
<svg version="1.1" viewBox="0 0 24 24" aria-labelledby="svg-title" aria-describedby="svg-desc">
  <title id="svg-title">Chevron pointing down</title>
  <desc id="svg-desc">Press the spacebar or enter key to expand the content.</desc>
  <path fill="black" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
</svg>
```

### Include a role

In order to cover all bases, let's include the `role` attribute with a value of `img`, letting <abbr title="Assistive Technologies">AT</abbr> know for sure that it is a graphic. Not all browsers or <abbr title="Assistive Technologies">AT</abbr> are built the same, let alone work with each other in the same manner. This can cause complexities. This is the final product.

``` html
<svg version="1.1" viewBox="0 0 24 24" role="img" aria-labelledby="svg-title" aria-describedby="svg-desc">
  <title id="svg-title">Chevron pointing down</title>
  <desc id="svg-desc">Press the spacebar or enter key to expand the content.</desc>
  <path fill="black" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
</svg>
```

these tips were taken from various blogs. You can find them below.

## References

<dl>
  <dd id="wcag-ref1">1: <cite>Web Content Accessibility Guidelines (WCAG) Overview.</cite> <a href="//www.w3.org/WAI/intro/wcag" target="_blank">Source</a></dd>
  <dd id="wcag-ref2">2: <cite>Document Object Model Level 2 Core Specification.</cite> <a href="//www.w3.org/TR/DOM-Level-2-Core" target="_blank">Source</a></dd>
  <dd><cite>Tips for Creating Accessible SVG.</cite> <a href="//www.sitepoint.com/tips-accessible-svg" target="_blank">Source</a></dd>
  <dd><cite>7 solutions for creating more accessible SVGs.</cite> <a href="//simplyaccessible.com/article/7-solutions-svgs" target="_blank">Source</a></dd>
</dl>
