// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers which are below threshold.
// filterBelow([6, 2, 3, 1, 4, 7], 3) => [2, 1]
// filterBelow([1, 2, 3], 0) => []
// do not modify input parameters

//mainFunction.
function filterBelow(array, threshold) {
  const filteredArray = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] < threshold) {
      filteredArray[filteredArray.length] = array[index];
    }
  }

  return filteredArray;
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

function testFilterbelow(array, threshold, expected) {
  const result = filterBelow(array, threshold);
  const inputSegment = "array :";
  const inputSegment2 = " threshold : " + threshold;
  const expectedSegment = "expected :";
  const resultSegment = "result :";

  console.log(areEqual(result, expected) ? '✅' : '❌');
  console.log(inputSegment, array, inputSegment2);
  console.log(expectedSegment, expected, resultSegment, result);
  console.log('-----------------------------------------------');
}

function testCases() {
  testFilterbelow([6, 2, 3, 1, 4, 7], 3, [2, 1]); // below Threshold
  testFilterbelow([1, 2, 3], 4, [1, 2, 3]);      //allBelow Threshold
  testFilterbelow([1, 2, 3], 0, []);            //allabove Threshold
  testFilterbelow([], 0, []);
}

testCases();

