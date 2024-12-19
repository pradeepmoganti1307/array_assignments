// Remove last n elements from the array
// dropLast([1, 2, 3], 1) => [1, 2]
// dropLast([1, 2, 3], 4) => []
// Do not modify the original array

function dropLast(array, numberOfElements) {
  const droppedArray = [];

  for (let index = 0; index < array.length - numberOfElements; index++) {
    droppedArray.push(array[index]);
  }

  return droppedArray;
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

function testDropLast(array1, numberOfElements, expected) {
  const result = dropLast(array1, numberOfElements);
  const inputSegment = "array :";
  const inputSegment2 = "nterms :";
  const expectedSegment = "expected :";
  const resultSegment = "result :";

  console.log(areEqual(result, expected) ? '✅' : '❌');
  console.log(inputSegment, array1);
  console.log(inputSegment2, numberOfElements);
  console.log(expectedSegment, expected, resultSegment, result);
  console.log('-----------------------------------------------');
}

function testCases() {
  testDropLast([1, 2, 3], 1, [1, 2]);
  testDropLast([1, 2, 3], 4, []);
  testDropLast([1, 2, 3], 3, []);
  testDropLast([], 4, []);
  testDropLast([1, 2, 3], 0, [1, 2, 3]);
}

testCases();