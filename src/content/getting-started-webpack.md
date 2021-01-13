# Webpack - Getting Started

The `@mdi/js` module and ES6 alongside [Webpack](https://webpack.js.org/) has [tree-shaking](https://webpack.js.org/guides/tree-shaking/) enabled for production builds.

Tree-shaking will remove any unused icons. The example below will only bundle a single icon's data.

```javascript
import { mdiAccount } from '@mdi/js';

console.log(mdiAccount); // M...Z Path data
```

To learn more about using `@mdi/js` with frameworks look at the specific guides for more details.

## Troubleshooting

For TypeScript make sure you have `"module":"es6"` set in the `tsconfig.json`.
