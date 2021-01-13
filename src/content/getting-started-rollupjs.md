# rollup.js - Getting Started

The `@mdi/js` module and ES6 alongside [rollup.js](https://rollupjs.org) has [tree-shaking](https://rollupjs.org/guide/en#tree-shaking) enabled for production builds.

Tree-shaking will remove any unused icons. The example below will only bundle a single icon's data.

```javascript
import { mdiAccount } from '@mdi/js';

console.log(mdiAccount); // M...Z Path data
```

To learn more about using `@mdi/js` with frameworks look at the specific guides for more details.

## Troubleshooting

[Edit this to list common issues]
