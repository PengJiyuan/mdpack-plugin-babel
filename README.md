# mdpack-plugin-babel
A mdpack plugin for transform mdpack-exec code to es5.

## Usage

```bash
npm i mdpack-plugin-babel -D
```

> Please make sure `@babel/core`, `@babel/preset-env` in you node_modules.

```javascript
// mdpack.config.js
const MdpackPluginBabel = require('mdpack-plugin-babel');
module.exports = {
  entry: 'index.md',
  output: {
    path: 'dist',
    name: 'mybundle'
  },
  format: ['html'],
  plugins: [
    new MdpackPluginBabel({
      babelrc: false,
      presets: ["@babel/preset-env"]
    });
  ]
}
```

Support `.babelrc` also:

```
// .babelrc
{
  presets: ["@babel/preset-env"]
}
```

## LICENSE

[MIT](./LICENSE) © PengJiyuan
