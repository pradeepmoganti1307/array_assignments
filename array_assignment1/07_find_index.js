// Given an array of numbers and a element, return the first index in the array
// where element is present else -1
// findIndex(["apple", "cake", "tea", "coffee", "tea"], "tea") => 2
// do not modify input parameters

//mainFunction
function findIndex(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return index;
    }
  }

  return -1;
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

function testFindIndex(array, element, expected) {
  const result = findIndex(array, element);
  const inputSegment = "array :";
  const inputSegment2 = " element : " + element;
  const expectedSegment = "expected :";
  const resultSegment = "result :";

  console.log(areEqual(result, expected) ? '✅' : '❌');
  console.log(inputSegment, array, inputSegment2);
  console.log(expectedSegment, expected, resultSegment, result);
  console.log('-----------------------------------------------');
}

function testCases() {
  testFindIndex(["apple", "cake", "tea", "coffee", "tea"], "tea", 2);
  testFindIndex(["apple", "cake", "coffee", "tea"], "tea", 3);
  testFindIndex([], "tea", -1);
}

testCases();