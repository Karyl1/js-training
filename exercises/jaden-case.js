'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

var jadenCase = (str) => {
  return str.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(" ")
}

//* Begin of tests
const assert = require('assert')

// assert.fail('You must write your own tests')
assert.strictEqual(jadenCase("sad to return"), "Sad To Return");
assert.strictEqual(jadenCase("test"), "Test");
// End of tests */
