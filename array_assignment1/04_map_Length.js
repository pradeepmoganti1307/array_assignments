// Given an array containing words, return a new array containing length of
// the words.
// mapLengths(["apple", "cat", "Four"]) => [5, 3, 4]
// do not modify input parameters

function mapLengths(words) {
  const wordLengths = [];

  for (let index = 0; index < words.length; index++) {
    wordLengths[index] = words[index].length;
  }

  return wordLengths;
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

function testMapLengths(array, expected) {
  const result = mapLengths(array);
  const inputSegment = "array :";
  const expectedSegment = "expected :";
  const resultSegment = "result :";

  console.log(areEqual(result, expected) ? '✅' : '❌');
  console.log(inputSegment, array);
  console.log(expectedSegment, expected, resultSegment, result);
  console.log('-----------------------------------------------');
}

function testCases() {
  testMapLengths(["apple", "cat", "Four"], [5, 3, 4]);
  testMapLengths(["", "c", "Fo"], [0, 1, 2]);
  testMapLengths([""], [0]);
  //testMapLengths([3], [undefined]);
}

testCases();