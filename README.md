Build Status
Setup
First, fork this repository.

globals dependencies
install globaly node on your computer

# download your code locally
git clone https://github.com/GITHUB_LOGIN/js-training.git
# don't forget to remplace GITHUB_LOGIN by your github login

# change working directory to the newly cloned repository
cd js-training
Testing
Once you have coded your masterpiece, you can start to test your solutions.

You may either use our test tool to check all files

# run the test runner
./tester
output-tester

Or you can run only a some tests with

# run the test runner with args ( basics, advanced, math, get)
./tester basics
Or you can test files one by one with node

# open a file in node
node exercises/primitives
output-node

our tester may include bugs, feel free to check the code and fix it

(in doubt use node)

Solving
You can start editing the javascript files with your favorite text editor.

# Sublime Text
subl primitives.js

# VSCode
code primitives.js

# Vim
vim primitives.js

# I can not be held responsable if you use anything else.
where-to-code

Get Help !
We maintain an example based code documentation

All you need to know to solve those exercises is described in them.

Primitive and Operators [screencast]
Variables [screencast]
Data-Structures [screencast]
Get [screencast]
Set [screencast]
...full list
And we also made you a currated list of all the most usefull methods :

Math min, max, abs, sign, round, floor, ceil, trunc, random*
String
Transform slice, split, replace, toUpperCase, toLowerCase, trim, trimRight, trimLeft, padStart, padEnd
Search includes, startsWith, endsWith, indexOf, lastIndexOf, charCodeAt
Arrays Array.from, Array.isArray, fill*
Search find, findIndex, includes, indexOf, lastIndexOf
Transform concat, join, slice, pop*, push*, shift*, unshift*, splice*
Re-order reverse*, sort*
Functionnal Iteration forEach, filter, some, every, map, reduce, reduceRight
Object keys, values, entries, assign, fromEntries
(*) methods in italics are NOT pure (using them with the same arguments won't return the same result). They must be used with caution as it is harder to predict their results

Update
We may update tests, to apply them fetch and merge the master branch back to your branch.

git merge pull push branch checkout origin master stash pop
Test Style
We recommand to use editorconfig to auto-config your editor to match the coding style

We also made an .eslint rule to help you formating your code.

You may want to use eslint and prettier-eslint for painless application of the style

Automated test
We recommand to use Travis to automatise the testing phase, allow this repo and add this code in your README [![Build Status](https://travis-ci.org/GITHUB_LOGIN/js-training.svg?branch=master)](https://travis-ci.org/GITHUB_LOGIN/js-training) by remplacing GITHUB_LOGIN by your github login

Contribute
We greatly recommand you to add your own tests to this list

add your test file (ex: exercises/my-test.js)
edit package.json and add "my-test" to the "tests" array with the syntax {"tag": X, "name": NAME} where you replace the tag (x) and the name (NAME)
make a pull request !https://github.com/nan-academy/js-training/compare/master...GITHUB_LOGIN:master
All the tests must be written using assert for ./tester to work properly.
