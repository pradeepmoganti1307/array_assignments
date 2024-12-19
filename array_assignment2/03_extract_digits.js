// Give an number extract its digit into array
// Number can positive, negative, floating point.
// extractDigits(123) => [1, 2, 3]
// extractDigits(-123) => [1, 2, 3]
// extractDigits(12.3) => [1, 2, 3]

function extractDigits(number) {
  const extractedDigits = [];
  let numberToExtract = Math.abs(number);

  while (numberToExtract > 9) {
    extractedDigits.unshift(numberToExtract % 10);
    numberToExtract = Math.floor(numberToExtract / 10);
  }

  extractedDigits.unshift(numberToExtract % 10);
  
  return extractedDigits;
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

function testExtractDigits(array, expected) {
  const result = extractDigits(array);
  const inputSegment = "array :";
  const expectedSegment = "expected :";
  const resultSegment = "result :";

  console.log(areEqual(result, expected) ? '✅' : '❌');
  console.log(inputSegment, array);
  console.log(expectedSegment, expected, resultSegment, result);
  console.log('-----------------------------------------------');
}

function testCases() {
  // testExtractDigits(12.3, [1, 2, 3]);
  // testExtractDigits(12.3456, [1, 2, 3, 4, 5, 6]);

  testExtractDigits(0, [0]);
  testExtractDigits(123, [1, 2, 3]);
  testExtractDigits(1203, [1, 2, 0, 3]);

  testExtractDigits(-1, [1]);
  testExtractDigits(-123, [1, 2, 3]);

  testExtractDigits(+1, [1]);
  testExtractDigits(+123, [1, 2, 3]);
}

testCases();