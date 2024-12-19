// Return all the elements of array1 which are not present in array2.
// difference([1, 2, 3], [2, 3, 4]) => [1]

function isPresent(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return true;
    }
  }

  return false;
}

function difference(array1, array2) {
  const leftOverArray = [];

  for (let index = 0; index < array1.length; index++) {
    if (!isPresent(array2, array1[index])) {
      leftOverArray.push(array1[index]);
    }
  }

  return leftOverArray;
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

function testdifference(array1, array2, expected) {
  const result = difference(array1, array2);
  const inputSegment = "array :";
  const inputSegment2 = "array2 :";
  const expectedSegment = "expected :";
  const resultSegment = "result :";

  console.log(areEqual(result, expected) ? '✅' : '❌');
  console.log(inputSegment, array1);
  console.log(inputSegment2, array2);
  console.log(expectedSegment, expected, resultSegment, result);
  console.log('-----------------------------------------------');
}

function testCases() {
  testdifference([], [], []);
  testdifference([], [1, 2, 3], []);
  testdifference([1, 2, 3], [], [1, 2, 3]);
  testdifference([1, 2, 3], [2, 3, 4], [1]);
}

testCases();