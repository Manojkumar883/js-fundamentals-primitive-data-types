// do not edit these lines
const numOne = 8
const numTwo = 16
const numThree = 32

// TODO: Replace NaN below using Javascript numeric operators so that the tests pass
//       eg  myAnswer = numOne * 42
//       NOT myAnswer = 336

// 1. Set this variable to numOne added to numTwo
const numOnePlusNumTwo = numOne + numTwo
console.log('Addition: ', numOnePlusNumTwo)

// 2. Set this variable to numThree multiplied by numTwo
const numThreeTimesNumTwo = numThree * numTwo
console.log('Multiplication: ', numThreeTimesNumTwo)

// 3. Set this variable to numThree divided by numOne
const numThreeDividedByNumOne = numThree / numOne
console.log('Division: ', numThreeDividedByNumOne)

// 4. Set this variable to numThree minus numOne
const numThreeMinusNumOne = numThree - numOne
console.log('Subtraction: ', numThreeMinusNumOne)

// 5. Set this variable to the sum of numOne, numTwo and numThree
const sum = numOne + numTwo + numThree
console.log('Adding three numbers: ', sum)

// 6. Set this variable to the sum of (numOne, numTwo, numThree) divided by numOne
const numBytes = (numOne + numTwo + numThree) / numOne
console.log('Addition and division: ', numBytes)

// do not edit the exported object.
module.exports = {
  a: numOnePlusNumTwo,
  b: numThreeTimesNumTwo,
  c: numThreeDividedByNumOne,
  d: numThreeMinusNumOne,
  e: sum,
  f: numBytes
}
