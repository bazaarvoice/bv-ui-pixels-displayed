# bv-ui-pixels-displayed

[![NPM version][npm-image]][npm-url]

[![Build Status][travis-image]][travis-url]

[![Dependency Status][daviddm-url]][daviddm-image]

> A module for detecting whether an element is visible.

## Install

```sh
$ npm install --save bv-ui-pixels-displayed
```

## Usage

```js
var bvUIPixelsDisplayed = require('bv-ui-pixels-displayed');
var pixelsDisplayed = bvUIPixelsDisplayed(window, document);

if (pixelsDisplayed(element) > 0) {
  // element is visible
}
```

## License

MIT © [Bazaarvoice](http://bazaarvoice.com)


[npm-url]: https://npmjs.org/package/bv-ui-pixels-displayed
[npm-image]: https://badge.fury.io/js/bv-ui-pixels-displayed.svg
[travis-url]: https://travis-ci.org/bazaarvoice/bv-ui-pixels-displayed
[travis-image]: https://travis-ci.org/bazaarvoice/bv-ui-pixels-displayed.svg?branch=master
[daviddm-url]: https://david-dm.org/bazaarvoice/bv-ui-pixels-displayed.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/bazaarvoice/bv-ui-pixels-displayed
