# remove-trailing-separator

[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Appveyor Status][appveyor-image]][appveyor-url] [![Daviddm Status][daviddm-image]][daviddm-url]

> Remove trailing path separator from string.


## Install

```
$ npm install --save remove-trailing-separator
```


## Usage

```js
var removeTrailingSeparator = require('remove-trailing-separator');

removeTrailingSeparator('/foo/bar/baz/');
//=> /foo/bar/baz
removeTrailingSeparator('/foo/bar/baz//');
//=> /foo/bar/baz
removeTrailingSeparator('\\foo\\bar\\baz\\');
//=> \\foo\\bar\\baz
removeTrailingSeparator('\\foo\\bar\\baz\\\\');
//=> \\foo\\bar\\baz
```


## API

### removeTrailingSeparator(input) -> String

#### input

*Required*  
Type: `string`

Like path string.


## Changelog

[changelog.md](./changelog.md).


## License

MIT © [sanemat](http://sane.jp)


[travis-url]: https://travis-ci.org/sanemat/remove-trailing-separator
[travis-image]: https://img.shields.io/travis/sanemat/remove-trailing-separator/master.svg?style=flat-square&label=travis
[appveyor-url]: https://ci.appveyor.com/project/sanemat/remove-trailing-separator/branch/master
[appveyor-image]: https://img.shields.io/appveyor/ci/sanemat/remove-trailing-separator/master.svg?style=flat-square&label=appveyor
[npm-url]: https://npmjs.org/package/remove-trailing-separator
[npm-image]: https://img.shields.io/npm/v/remove-trailing-separator.svg?style=flat-square
[daviddm-url]: https://david-dm.org/sanemat/remove-trailing-separator
[daviddm-image]: https://img.shields.io/david/sanemat/remove-trailing-separator.svg?style=flat-square
