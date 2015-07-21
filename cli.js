#!/usr/bin/env node
/*eslint no-console:0*/
'use strict';
var meow = require('meow');
var removeTrailingSeparator = require('./');

var cli = meow({
  help: [
    'Usage',
    '  $ remove-trailing-separator [input]',
    '',
    'Examples',
    '  $ remove-trailing-separator',
    '  unicorns & rainbows',
    '',
    '  $ remove-trailing-separator ponies',
    '  ponies & rainbows',
    '',
    'Options',
    '  --foo  Lorem ipsum. Default: false'
  ]
});

console.log(removeTrailingSeparator(cli.input[0] || 'unicorns'));
