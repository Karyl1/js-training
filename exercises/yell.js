'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

var yell = (str) => str.toUpperCase();
//* Begin of tests
const assert = require('assert')

// assert.fail('You must write your own tests')
assert.strictEqual(yell("str"), "STR");
assert.strictEqual(yell("test"), "TEST");
// End of tests */
