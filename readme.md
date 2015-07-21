# remove-trailing-path-separator

[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Appveyor Status][appveyor-image]][appveyor-url] [![Daviddm Status][daviddm-image]][daviddm-url]

> Remove trailing path separator from string.


## Install

```
$ npm install --save remove-trailing-path-separator
```


## Usage

```js
var removeTrailingPathSeparator = require('remove-trailing-path-separator');

removeTrailingPathSeparator('/foo/bar/baz/');
//=> /foo/bar/baz
removeTrailingPathSeparator('/foo/bar/baz//');
//=> /foo/bar/baz
removeTrailingPathSeparator('\\foo\\bar\\baz\\');
//=> \\foo\\bar\\baz
removeTrailingPathSeparator('\\foo\\bar\\baz\\\\');
//=> \\foo\\bar\\baz
```


## API

### removeTrailingPathSeparator(input) -> String

#### input

*Required*  
Type: `string`

Like path string.


## Changelog

[changelog.md](./changelog.md).


## License

MIT © [sanemat](http://sane.jp)


[travis-url]: https://travis-ci.org/pandawing/node-remove-trailing-path-separator
[travis-image]: https://img.shields.io/travis/pandawing/node-remove-trailing-path-separator/master.svg?style=flat-square&label=travis
[appveyor-url]: https://ci.appveyor.com/project/sanemat/node-remove-trailing-path-separator/branch/master
[appveyor-image]: https://img.shields.io/appveyor/ci/sanemat/node-remove-trailing-path-separator/master.svg?style=flat-square&label=appveyor
[npm-url]: https://npmjs.org/package/remove-trailing-path-separator
[npm-image]: https://img.shields.io/npm/v/remove-trailing-path-separator.svg?style=flat-square
[daviddm-url]: https://david-dm.org/pandawing/node-remove-trailing-path-separator
[daviddm-image]: https://img.shields.io/david/pandawing/node-remove-trailing-path-separator.svg?style=flat-square
