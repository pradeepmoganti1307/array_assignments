// Given an array of numbers true if numbers are in strictly descending order
// otherwise false.
// isStrictlyDescending([5, 4, 2, 1]) => true
// isStrictlyDescending([5, 4, 6, 1]) => false
// isStrictlyDescending([5, 4, 4, 1]) => false

function isStrictlyDescending(numbers) {
  for (let index = 1; index < numbers.length; index++) {
    if (numbers[index - 1] <= numbers[index]) {
      return false;
    }
  }

  return true;
}

/*-----------------testing Section Starts From Here ------------------------*/

function testIsStrictlyDescending(array, expected) {
  const result = isStrictlyDescending(array);
  const inputSegment = "array :";
  const expectedSegment = "expected :";
  const resultSegment = "result :";

  console.log(result === expected ? '✅' : '❌');
  console.log(inputSegment, array);
  console.log(expectedSegment, expected, resultSegment, result);
  console.log('-----------------------------------------------');
}

function testCases() {
  testIsStrictlyDescending([2, 3, 1], false);
  testIsStrictlyDescending([1, 3, 4, 5, 16], false);
  testIsStrictlyDescending([5, 4, 6, 1], false);
  testIsStrictlyDescending([5, 4, 4, 1], false);
  testIsStrictlyDescending([0, 3], false);

  testIsStrictlyDescending([], true);
  testIsStrictlyDescending([0], true);
  testIsStrictlyDescending([2, 1], true);
  testIsStrictlyDescending([5, 4, 2, 1], true);
}

testCases();
