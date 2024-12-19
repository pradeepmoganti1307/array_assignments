const zeroToNineteen = [
  "zero", "one", "two",
  "three", "four", "five",
  "six", "seven", "eight",
  "nine", "ten", "eleven",
  "twelve", "thirteen", "fourteen",
  "fifteen", "sixteen", "seventeen",
  "eighteen", "nineteen"
];

const multiplesOf10Below100 = ['', '', "twenty",
  "thirty", "forty", "fifty",
  "sixty", "seventy", "eighty",
  "ninety"
];

function quotient(dividend, divisor) {
  return Math.floor(dividend / divisor);
}

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function placeValueStandard(numberPlaceValue) {
  const standards = ["", "thousand", "million", "billion"];
  const placeValue = '' + numberPlaceValue;
  const index = quotient(placeValue.length, 3);

  return standards[index];
}

function getWordForNumberFrom20(number) {
  const wordForUnitDigit = zeroToNineteen[number % 10];
  const tensDigit = quotient(number, 10);
  const wordForTensDigit = multiplesOf10Below100[tensDigit];

  if (wordForUnitDigit === 'zero') {
    return wordForTensDigit;
  }

  return wordForTensDigit + ' ' + wordForUnitDigit;
}

function getWordForNumber(number) {
  if (number < 20) {
    return zeroToNineteen[number];
  }

  return getWordForNumberFrom20(number);
}

function convertNumbersBelow1000(number) {
  if (number < 100) {
    return getWordForNumber(number);
  }

  const words = [];
  const digitIn100Place = quotient(number, 100);

  if (!isDivisible(number, 100)) {
    words.unshift(getWordForNumber(number % 100));
  }

  words.unshift('hundred');
  words.unshift(getWordForNumber(digitIn100Place));
  return words.join(' ');
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

function convertNumberToWords(number, wordsForNumber, placeValue) {
  const words = concat([], wordsForNumber);

  if (number < 1000) {
    words.unshift(convertNumbersBelow1000(number));
    return words.join(' ');
  }
  
  if (!isDivisible(number, 1000)) {
    words.unshift(convertNumbersBelow1000(number % 1000));
  }

  const leftPart = quotient(number, 1000); //variable naming

  if (!isDivisible(leftPart, 1000)) {
    words.unshift(placeValueStandard(placeValue));
  }

  return convertNumberToWords(leftPart, words, placeValue * 1000);
}

function numberToWords(number) {
  return convertNumberToWords(number, [], 1000);
}

/*------------------- Test Section Start Here! ------------------*/
let totalPassed = 0; 
let totalTestCases = 0;

function testNumberToWords(number, expected) {
  const result = numberToWords(number);
  const inputSegment = "number :" + number;
  const expectedSegment = "expected :" + expected;
  const resultSegment = "result:" + result;

  totalTestCases += 1;
  totalPassed += result === expected ? 1 : 0;

  console.log(result === expected ? '✅' : '❌');
  console.log(inputSegment, expectedSegment, resultSegment);
  console.log('-----------------------------------------------');
}

function testsFortwelveDigits() {
  const parameter1 = 'nine hundred ninety nine billion nine hundred ninety';
  const parameter2 = ' nine million nine hundred ninety';
  const parameter3 = ' nine thousand nine hundred ninety nine';
  testNumberToWords(999999999999, parameter1 + parameter2 + parameter3);
  testNumberToWords(100000000001, 'one hundred billion one');
}

function testsForelevenDigits() {
  const parameter1 = 'ninety nine billion nine hundred ninety';
  const parameter2 = ' nine million nine hundred ninety';
  const parameter3 = ' nine thousand nine hundred ninety nine';
  testNumberToWords(99999999999, parameter1 + parameter2 + parameter3);
  testNumberToWords(10000001001, 'ten billion one thousand one');
  testNumberToWords(10000000001, 'ten billion one');
  testNumberToWords(10000000000, 'ten billion');
}

function testsFortenDigits() {
  testNumberToWords(1000000000, 'one billion');
  testNumberToWords(1000000001, 'one billion one');

  const parameter = " nine million nine hundred ninety nine thousand nine hundred ninety nine";
  testNumberToWords(9999999999, 'nine billion nine hundred ninety' + parameter);
}

function testsFornineDigits() {
  testNumberToWords('100000000', 'one hundred million');
  testNumberToWords('100001001', 'one hundred million one thousand one');
}

function testsForeightDigits() {
  const parameter = 'twenty one thousand nine hundred ninety nine';
  testNumberToWords(12321999, 'twelve million three hundred ' + parameter);
  testNumberToWords(10101010, 'ten million one hundred one thousand ten');
  testNumberToWords(10000000, 'ten million');
}

function testsForsevenDigits() {
  testNumberToWords(1000000, 'one million');
  testNumberToWords(1000001, 'one million one');

  const parameter = ' nine thousand nine hundred ninety nine';
  testNumberToWords(9999999, 'nine million nine hundred ninety' + parameter);
}

function testsForsixDigits() {
  testNumberToWords(100000, 'one hundred thousand');

  const parameter = ' thousand nine hundred ninety nine';
  testNumberToWords(999999, 'nine hundred ninety nine' + parameter);
}

function testsForfiveDigits() {
  testNumberToWords(10000, 'ten thousand');
  testNumberToWords(10001, 'ten thousand one');
  testNumberToWords(10100, 'ten thousand one hundred');
  testNumberToWords(99999, 'ninety nine thousand nine hundred ninety nine');
}

function testsForfourDigits() {
  testNumberToWords(1000, 'one thousand');
  testNumberToWords(1001, 'one thousand one');
  testNumberToWords(1100, 'one thousand one hundred');
  testNumberToWords(1900, 'one thousand nine hundred');
  testNumberToWords(2900, 'two thousand nine hundred');
  testNumberToWords(2901, 'two thousand nine hundred one');
  testNumberToWords(5678, 'five thousand six hundred seventy eight');
  testNumberToWords(5678, 'five thousand six hundred seventy eight');
  testNumberToWords(9999, 'nine thousand nine hundred ninety nine');
}

function testsForthreeDigits() {
  testNumberToWords(100, 'one hundred');
  testNumberToWords(101, 'one hundred one');
  testNumberToWords(199, 'one hundred ninety nine');
  testNumberToWords(200, 'two hundred');
  testNumberToWords(463, 'four hundred sixty three');
  testNumberToWords(673, 'six hundred seventy three');
  testNumberToWords(901, 'nine hundred one');
  testNumberToWords(951, 'nine hundred fifty one');
  testNumberToWords(999, 'nine hundred ninety nine');
}

function testsFortwoDigits() {
  testNumberToWords(10, 'ten');
  testNumberToWords(11, 'eleven');
  testNumberToWords(19, 'nineteen');
  testNumberToWords(20, 'twenty');
  testNumberToWords(21, 'twenty one');
  testNumberToWords(29, 'twenty nine');
  testNumberToWords(76, 'seventy six');
  testNumberToWords(85, 'eighty five');
  testNumberToWords(91, 'ninety one');
  testNumberToWords(99, 'ninety nine');
}

function testsForunitDigits() {
  testNumberToWords(0, 'zero');
  testNumberToWords(1, 'one');
  testNumberToWords(2, 'two');
  testNumberToWords(9, 'nine');
}

function displayTestResults() {
  console.log("=".repeat(118));
  console.log(("Total TestCases : " + totalTestCases).padStart(65));
  console.log(("Test Passed : " + totalPassed).padStart(61));
  console.log("=".repeat(118));
}

function testCases() {
  testsForunitDigits();
  testsFortwoDigits();
  testsForthreeDigits();
  testsForfourDigits();
  testsForfiveDigits();
  testsForsixDigits();
  testsForsevenDigits();
  testsForeightDigits();
  testsFornineDigits();
  testsFortenDigits();
  testsForelevenDigits();
  testsFortwelveDigits();
}

testCases();
displayTestResults(); //declared 2 global variables in testSection for results.