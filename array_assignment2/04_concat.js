// concat the given arrays.
// concat([1, 2, 3], [4, 5, 6]) => [1, 2, 3, 4, 5, 6]

function concat(array1, array2) {
  const concatenatedArray = [];

  for (let index = 0; index < array1.length; index++) {
    concatenatedArray.push(array1[index]);
  }

  for (let index = 0; index < array2.length; index++) {
    concatenatedArray.push(array2[index]);
  }

  return concatenatedArray;
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

function testConcat(array1, array2, expected) {
  const result = concat(array1, array2);
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
  testConcat([], [], []);
  testConcat([], [2], [2]);
  testConcat([1, 2, 3], [4, 5, 6], [1, 2, 3, 4, 5, 6]);
}

testCases();