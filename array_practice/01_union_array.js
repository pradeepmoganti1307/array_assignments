function isPresent(element, array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return true;
    }
  }

  return false;
}

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

function union(array1, array2) {
  const concatenatedArray = concat(array1, array2);
  const unionOfArrays = [];

  for (let index = 0; index < concatenatedArray.length; index++) {
    if (!isPresent(concatenatedArray[index], unionOfArrays)) {
      unionOfArrays.push(concatenatedArray[index]);
    }
  }

  return unionOfArrays;
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

function testUnionOfArrays(array1, array2, expected, nthTestCase) {
  const result = union(array1, array2);
  const indexForTestCase = "TestCase: " + nthTestCase;
  const inputSegment = "array1 :";
  const inputSegment2 = "array2 :";
  const expectedSegment = "expected :";
  const resultSegment = "result :";

  console.log(indexForTestCase, areEqual(result, expected) ? '✅' : '❌');
  console.log(inputSegment, array1);
  console.log(inputSegment2, array2);
  console.log(expectedSegment, expected, resultSegment, result);
  console.log('-----------------------------------------------');
}

function testCases() {
  let index = 1;

  testUnionOfArrays([10, 20, 30, 40], [10, 20, 50, 60], [10, 20, 30, 40, 50, 60], index++);
  testUnionOfArrays([30, 40], [10, 20, 50, 60], [30, 40, 10, 20, 50, 60], index++);
  testUnionOfArrays([30, 30], [10, 20, 50, 60], [30, 10, 20, 50, 60], index++);
  testUnionOfArrays([30, 30], [10, 10, 10], [30, 10], index++);
  testUnionOfArrays([], [], [], index++);
  
}

testCases();
