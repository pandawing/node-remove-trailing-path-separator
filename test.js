'use strict';
var assert = require('power-assert');
var removeTrailingSeparator = require('./');

it('should ', function () {
  assert.strictEqual(removeTrailingSeparator('unicorns'), 'unicorns & rainbows');
});
it('should not ', function () {
  assert.strictEqual(removeTrailingSeparator('unicorns'), 'unicorns & wrong');
});
