const wordsForNumbersBelow20 = [
  "zero", "one", "two",
  "three", "four", "five",
  "six", "seven", "eight",
  "nine", "ten", "eleven",
  "twelve", "thirteen", "fourteen",
  "fifteen", "sixteen", "seventeen",
  "eighteen", "nineteen"
];

const wordsForNumbersFrom20 = ['', '', "twenty",
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
  const standards = ["hundred", "thousand", "million", "billion"];
  let index = 0;
  let placeValue = numberPlaceValue;

  while (placeValue > 100) {
    placeValue = quotient(placeValue, 1000);
    index += 1;
  }

  return standards[index];
}

function wordForNumber(number) {
  const wordForUnitDigit = wordsForNumbersBelow20[number % 10];
  const tensDigit = quotient(number, 10);
  const wordForTensDigit = multiplesOf10Below100[tensDigit];

  if (wordForUnitDigit === 'zero') {
    return wordForTensDigit;
  }

  return wordForTensDigit + ' ' + wordForUnitDigit;
}

function getWordForNumber(number) {
  if (number < 20) {
    return wordsForNumbersBelow20[number];
  }

  return wordForNumber(number);
}

function numberToWordsBelow4Digit(number) {
  if (number < 100) {
    return getWordForNumber(number);
  }
  const WordsForNumber = [];
  const digitIn100Place = quotient(number, 100);

  if (!isDivisible(number, 100)) {
    WordsForNumber.unshift(getWordForNumber(number % 100));
  }

  WordsForNumber.unshift(placeValueStandard(100));
  WordsForNumber.unshift(getWordForNumber(digitIn100Place));
  return WordsForNumber.join(' ');
}

function numberToWords(numberToBeConverted) {
  const wordsForNumber = [];
  let number = numberToBeConverted;
  let placeValue = 1000;

  while (number > 999) {
    const threeDigitNumber = number % 1000;
    number = quotient(number, 1000);
    if (threeDigitNumber !== 0) {
      wordsForNumber.unshift(numberToWordsBelow4Digit(threeDigitNumber));
    }

    if (!isDivisible(number, 1000)) {
      wordsForNumber.unshift(placeValueStandard(placeValue));
    }

    placeValue *= 1000;
  }
  wordsForNumber.unshift(numberToWordsBelow4Digit(number));
  return wordsForNumber.join(' ');
}

/*------------------- Test Section Start Here! ------------------*/

function testNumberToWords(number, expected) {
  const result = numberToWords(number);
  const inputSegment = "number :" + number;
  const expectedSegment = "expected :" + expected;
  const resultSegment = "result:" + result;

  console.log(result === expected ? '✅' : '❌');
  console.log(inputSegment, expectedSegment, resultSegment);
  console.log('-----------------------------------------------');
}

function twelveDigits() {
  const parameter1 = 'nine hundred ninety nine billion nine hundred ninety';
  const parameter2 = ' nine million nine hundred ninety';
  const parameter3 = ' nine thousand nine hundred ninety nine';
  testNumberToWords(999999999999, parameter1 + parameter2 + parameter3);
  testNumberToWords(100000000001, 'one hundred billion one');
}

function tenDigits() {
  testNumberToWords(1000000000, 'one billion');
  testNumberToWords(1000000001, 'one billion one');

  const parameter = " six million three hundred five thousand twenty eight";
  testNumberToWords(9346305028, 'nine billion three hundred forty' + parameter);
}

function nineDigits() {
  testNumberToWords('100000000', 'one hundred million');
  testNumberToWords('100001001', 'one hundred million one thousand one');
}

function eightDigits() {
  const parameter = 'twenty one thousand nine hundred ninety nine';
  testNumberToWords(12321999, 'twelve million three hundred ' + parameter);
  testNumberToWords(10101010, 'ten million one hundred one thousand ten');
  testNumberToWords(10000000, 'ten million');
}

function sevenDigits() {
  testNumberToWords(1000000, 'one million');
  testNumberToWords(1000001, 'one million one');
  const parameter = ' nine thousand nine hundred ninety nine';
  testNumberToWords(9999999, 'nine million nine hundred ninety' + parameter);
}

function sixDigits() {
  testNumberToWords(100000, 'one hundred thousand');
  const parameter = ' thousand nine hundred ninety nine';
  testNumberToWords(999999, 'nine hundred ninety nine' + parameter);
}

function fiveDigits() {
  testNumberToWords(10000, 'ten thousand');
  testNumberToWords(10001, 'ten thousand one');
  testNumberToWords(10100, 'ten thousand one hundred');
  testNumberToWords(99999, 'ninety nine thousand nine hundred ninety nine');
}

function fourDigits() {
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

function threeDigits() {
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

function twoDigits() {
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

function unitDigits() {
  testNumberToWords(0, 'zero');
  testNumberToWords(1, 'one');
  testNumberToWords(2, 'two');
  testNumberToWords(9, 'nine');
}

function testCases() {
  unitDigits();
  twoDigits();
  threeDigits();
  fourDigits();
  fiveDigits();
  sixDigits();
  sevenDigits();
  eightDigits();
  nineDigits();
  tenDigits();
  twelveDigits();
}

testCases();