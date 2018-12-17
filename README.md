# Next.js + Html

Import html files in [Next.js](https://github.com/zeit/next.js)

## Installation

```
npm install --save next-html
```

or

```
yarn add next-html
```

## Usage

Create a `next.config.js` in your project

```js
// next.config.js
const withHtml = require('next-html');
module.exports = withHtml();
```

Optionally you can add your custom Next.js configuration as parameter

```js
// next.config.js
const withHtml = require('next-html');
module.exports = withHtml({
  webpack(config, options) {
    return config;
  }
});
```

### assetPrefix

You can serve remote resources by setting **_assetPrefix_** option.

Example usage:

```js
// next.config.js
const withHtml = require('next-html');
module.exports = withHtml({
  assetPrefix: 'https://static-example.com',
  webpack(config, options) {
    return config;
  }
});
```