// Given array1 and array2 returns true if both array are equal else false.
// Examples:
// areEqual([1, 2, 3, 4], [1, 2, 3, 4]) => true
// areEqual([1, 2, 3], [1, 2, 3, 4]) => false
// areEqual([1, 2, 3], [1, 3, 2]) => false
// areEqual([], []) => true
// do not modify input parameters

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
}

function testAreEqual(array1, array2, expected) {
  const result = areEqual(array1, array2);
  const inputSegment1 = "array1 :";
  const inputSegment2 = "array2 :";
  const expectedSegment = "expected :" + expected;
  const resultSegment = "result :" + result;

  console.log(result === expected ? '✅' : '❌');
  console.log(inputSegment1, array1, inputSegment2, array2);
  console.log(expectedSegment, resultSegment);
  console.log('-----------------------------------------------');
}

function testCases() {
  testAreEqual([1, 2, 3, 4], [1, 2, 3, 4], true); //sameLengthSameArray
  testAreEqual([1, 2, 3], [1, 2, 3, 4], false);  //differentLength
  testAreEqual([1, 2, 3], [1, 3, 2], false);    //differentArray
  testAreEqual([], [], true);                  //emptyArray
  testAreEqual([1, 2, 3], ['1', '2', '3'], false); //differentDataType
}

testCases();