// Given an array return reverse of array.
// reverse([1, 2, 3]) => [3, 2, 1]
// reverse([]) => []
// do not modify input parameters

//main function
function reverse(array) {
  const reversedArray = [];

  for (let index = 0; index < array.length; index++) {
    reversedArray.unshift(array[index]);
  }

  return reversedArray;
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

function testReverse(array, expected) {
  const result = reverse(array);
  const inputSegment = "array :";
  const expectedSegment = "expected :";
  const resultSegment = "result :";

  console.log(areEqual(result, expected) ? '✅' : '❌');
  console.log(inputSegment, array);
  console.log(expectedSegment, expected, resultSegment, result);
  console.log('-----------------------------------------------');
}

function testCases() {
  testReverse([], []); //emptyArray
  testReverse([1], [1]);
  testReverse([1, 2], [2, 1]);
  testReverse([1, 2, 3], [3, 2, 1]);
  testReverse([1, 2, 3, 4], [4, 3, 2, 1]);
  testReverse(['1', '2', '3'], ['3', '2', '1']);
}

testCases();