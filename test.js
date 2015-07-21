'use strict';
var assert = require('power-assert');
var removeTrailingSeparator = require('./');

describe('remove-trailing-separator', function () {
  it('linux no slash', function () {
    assert.equal(removeTrailingSeparator('/foo/bar/baz'), '/foo/bar/baz');
  });
  it('linux 1 slash', function () {
    assert.equal(removeTrailingSeparator('/foo/bar/baz/'), '/foo/bar/baz');
  });
  it('linux 2 slash', function () {
    assert.equal(removeTrailingSeparator('/foo/bar/baz//'), '/foo/bar/baz');
  });
  it('windows no backslash', function () {
    assert.equal(removeTrailingSeparator('\\foo\\bar\\baz'), '\\foo\\bar\\baz');
  });
  it('windows 1 backslash', function () {
    assert.equal(removeTrailingSeparator('\\foo\\bar\\baz\\'), '\\foo\\bar\\baz');
  });
  it('windows 2 backslash', function () {
    assert.equal(removeTrailingSeparator('\\foo\\bar\\baz\\\\'), '\\foo\\bar\\baz');
  });
});
