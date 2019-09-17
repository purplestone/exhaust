const assert = require('assert');
const exhaust = require('./exhaust.js');



assert.deepEqual(exhaust(may => `1${may('a', 'b')}${may('a', 'b', 'c')}${may(['a', 'b'])}1`),
[
	'1aaa1',
	'1aab1',
	'1aba1',
	'1abb1',
	'1aca1',
	'1acb1',
	'1baa1',
	'1bab1',
	'1bba1',
	'1bbb1',
	'1bca1',
	'1bcb1' 
]
, '1 232 1');

assert.deepEqual(exhaust(may => `1${may(2, 3)}1`),
[
	'121',
	'131'
]
, '1');

assert.deepEqual(exhaust(may => `1${may('a')}1`),
[
	'1a1'
]
, '1');


console.log(exhaust(may => `${may('a', 'b')} - ${may('x', 'y', 'z')}`));

