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

function findPair(array, index, target) {
  const pair = [array[index]];

  for (let offset = index + 1; offset < array.length; offset++) {
    if (array[offset] + array[index] === target) {
      pair.push(array[offset]);

      return pair;
    }
  }

  return pair;
}

function pairsForTarget(array, target) {
  const givenArray = [concat([], array), []];
  const pairs = [];

  for (let index = 0; index < givenArray[0].length; index++) {
    const pair = findPair(givenArray[0], index, target);

    if (pair.length === 2) {
      pairs.push(pair);
      givenArray[0] = difference(givenArray[0], pair);
      index = -1;
    }
  } 

  return pairs;
}

/*-----------------testing Section Starts From Here ------------------------*/

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    for (let innerIndex = 0; innerIndex < array1[index].length; innerIndex++) {
      if (array1[index][innerIndex] !== array2[index][innerIndex]) {
        return false;
      }
    }
  }

  return true;
} //used for testCases

function testFindPairs(array, target, expected, nthTestCase) {
  const result = pairsForTarget(array, target);
  const indexForTestCase = "TestCase: " + nthTestCase;
  const inputSegment = "array :";
  const inputSegment2 = "target :";
  const expectedSegment = "expected :";
  const resultSegment = "result :";

  console.log(indexForTestCase, areEqual(result, expected) ? '✅' : '❌');
  console.log(inputSegment, array);
  console.log(inputSegment2, target);
  console.log(expectedSegment, expected, resultSegment, result);
  console.log('-----------------------------------------------');
}

function testCases() {
  testFindPairs([1, 2, 3, 4], 5, [[1, 4], [2, 3]], 1);
  testFindPairs([1, 4, 1, 4], 5, [[1, 4], [1, 4]], 2);
  testFindPairs([2, 4, 1, 2, 5], 6, [[2, 4], [1, 5]], 3);
  testFindPairs([1, 0, 2, 1], 5, [], 4);
}

testCases();
