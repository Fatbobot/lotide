# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @fatbobot/lotide`

**Require it:**

`const _ = require('@fatbobot/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: prints an assertion if two array inputs are equal
* `function2(assertEqual)`: returns true or false if two values are equal
* `function3(assertObjectsEqual)`: prints an assertion if two objects are equal
* `function4(countLetters)`: returns a number representing how many non space characters are in a string
* `function5(countOnly)`: returns a count of how many of the same value are in an input
* `function6(eqArrays)`: compares two arrays and returns true or false if equal
* `function7(eqObjects)`: compares two objects and returns true or false if equal
* `function8(findKey)`: receives an object and callback. returns the value associated with key in callback
* `function9(findKeyByValue)`: receives object and value. Returns key associated with value
* `function10(flatten)`: receives array. removes and merges nested arrays in umbrella array
* `function11(head)`: receives array. returns first value in array
* `function12(letterPositions)`: return all the indices (zero-based positions) in the string where each character is found.
* `function13(middle)`: receives array. returns middle values. 1 if odd, 2 if even length array
* `function14(tail)`: receives array. returns all values in array after first position
* `function15(head)`: receives array and callback. Returns all values up until specified value in callback
<<<<<<< HEAD
* `function16(without)`: receives two arrays. returns array without values in second array
=======
* `function16(without)`: receives two arrays. returns array without values in second aray
* `function17(map)`: receives an array and a callback. Function maps and applies callback to individual values in array
>>>>>>> 4122940dd51e6e4021fa08ade0cad633fd398085
