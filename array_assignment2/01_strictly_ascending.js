// Given an array of numbers true if numbers are in strictly ascending order
// otherwise false.
// isStrictlyAscending([1, 3, 4, 5, 16]) => true
// isStrictlyAscending([1, 3, 2, 4]) => false
// isStrictlyAscending([1, 3, 3, 4]) => false

function isStrictlyAscending(numbers) {
  for (let index = 1; index < numbers.length; index++) {
    if (numbers[index - 1] >= numbers[index]) {
      return false;
    }
  }

  return true;
}

/*-----------------testing Section Starts From Here ------------------------*/

function testIsStrictlyAscending(array, expected) {
  const result = isStrictlyAscending(array);
  const inputSegment = "array :";
  const expectedSegment = "expected :";
  const resultSegment = "result :";

  console.log(result === expected ? '✅' : '❌');
  console.log(inputSegment, array);
  console.log(expectedSegment, expected, resultSegment, result);
  console.log('-----------------------------------------------');
}

function testCases() {
  testIsStrictlyAscending([1, 3, 2, 4], false);
  testIsStrictlyAscending([1, 3, 3, 4], false);
  testIsStrictlyAscending([2, 3, 1], false);

  testIsStrictlyAscending([], true);
  testIsStrictlyAscending([0], true);
  testIsStrictlyAscending([0, 3], true);
  testIsStrictlyAscending([1, 3, 4, 5, 16], true);
}

testCases();
