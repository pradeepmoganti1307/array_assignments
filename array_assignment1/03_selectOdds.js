// Given an array of numbers return a new array containing
// only odd elements of the
// original array.
// selectOdds([3, 2, 4, 5, 7]) => [3, 5, 7]
// selectOdds([2, 4, 6]) => []
// Do not modify the input array.

function isOdd(number) {
  return number % 2 !== 0;
}

//mainFunction
function selectOdds(numbers) {
  const oddNumbers = [];

  for (let index = 0; index < numbers.length; index++) {
    if (isOdd(numbers[index])) {
      oddNumbers[oddNumbers.length] = numbers[index];
    }
  }

  return oddNumbers;
}

/*-----------------testing Section Starts From Here ------------------------*/

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
} //used for testCases

function testSelectOdds(array, expected) {
  const result = selectOdds(array);
  const inputSegment = "array :";
  const expectedSegment = "expected :";
  const resultSegment = "result :";

  console.log(areEqual(result, expected) ? '✅' : '❌');
  console.log(inputSegment, array);
  console.log(expectedSegment, expected, resultSegment, result);
  console.log('-----------------------------------------------');
}

function testCases() {
  testSelectOdds([1], [1]);
  testSelectOdds([2], []);
  testSelectOdds([1, 3, 5], [1, 3, 5]);
  testSelectOdds([2, 4, 6], []);
  testSelectOdds([3, 2, 4, 5, 7], [3, 5, 7]);
}

testCases();