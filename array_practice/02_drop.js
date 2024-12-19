function concat(array1, array2) {
  const nestedArray = [array1, array2];
  const concatenatedArray = [];

  for (let index = 0; index < nestedArray.length; index++) {
    for (let innerIndex = 0; innerIndex < nestedArray[index].length; innerIndex++) {
      concatenatedArray.push(nestedArray[index][innerIndex]);
    }
  }

  return concatenatedArray;
}

function drop(array, numberOfElements) {
  const droppedArray = concat([], array);

  for (let index = 0; index < numberOfElements; index++) {
    droppedArray.shift();
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

function testDrop(array1, numberOfElements, expected, nthTestCase) {
  const result = drop(array1, numberOfElements);
  const indexForTestCase = "TestCase: " + nthTestCase;
  const inputSegment = "array :";
  const inputSegment2 = "nterms :";
  const expectedSegment = "expected :";
  const resultSegment = "result :";

  console.log(indexForTestCase, areEqual(result, expected) ? '✅' : '❌');
  console.log(inputSegment, array1);
  console.log(inputSegment2, numberOfElements);
  console.log(expectedSegment, expected, resultSegment, result);
  console.log('-----------------------------------------------');
}

function testCases() {
  testDrop([1, 2, 3], 1, [2, 3], 1);
  testDrop([1, 2, 3], 4, [], 2);
  testDrop([1, 2, 3], 3, [], 3);
  testDrop([], 4, [], 4);
  testDrop([1, 2, 3], 0, [1, 2, 3], 5);
}

testCases();
