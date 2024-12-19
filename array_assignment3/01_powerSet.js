function decimalToBinary(decimal) {
  let binary = 0;
  let placevalue = 1;
  let number = decimal;

  while (number > 0) {
    const remainder = number % 2;
    binary += remainder * placevalue;
    number = Math.floor(number / 2);
    placevalue *= 10;
  }

  return binary;
}

function reverse(array) {
  const reversedArray = [];

  for (let index = 0; index < array.length; index++) {
    reversedArray.unshift(array[index]);
  }

  return reversedArray;
}

function generateSet(array, flagArray) {
  const set = [];

  for (let index = 0; index < flagArray.length; index++) {
    if (flagArray[index] === '1') {
      set.push(array[index]);
    }
  }

  return set;
}

function createFlagArray(number) {
  const flagArray = ('' + decimalToBinary(number)).split('');

  return reverse(flagArray);
}

function generatePowerSet(array) {
  const powerSet = [];
  const totalSets = Math.pow(2, array.length);

  for (let number = 0; number < totalSets; number++) {
    const flagArray = createFlagArray(number);
    powerSet.push(generateSet(array, flagArray));
  }

  return powerSet;
}

/*------------------test Section Starts Here--------------------*/

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

function isPresentInNestedArray(nestedArray, elementArray) {
  for (let index = 0; index < nestedArray.length; index++) {
    if (areEqual(nestedArray[index], elementArray)) {
      return true;
    }
  }

  return false;
}

function areEquals(nestedArray, expected) {
  if (nestedArray.length !== expected.length) {
    return false;
  }

  for (let index = 0; index < expected.length; index++) {
    if (isPresentInNestedArray(nestedArray, expected[index])) {
      return true;
    }
  }

  return false;
}


function testGeneratePowerSet(array, expected) {
  const result = generatePowerSet(array);
  const input = 'set :';
  const resultSegment = 'powerSet :';
  const expectedSegment = 'expected :';

  console.log(areEquals(result, expected) ? '✅' : '❌');
  console.log(input, array);
  console.log(resultSegment, result);
  console.log(expectedSegment, expected);
  console.log('-'.repeat(25));
}

function testAll() {
  testGeneratePowerSet([], [[]]);
  testGeneratePowerSet([1, 2], [[], [1], [2], [1, 2]]);
  testGeneratePowerSet([1, 2, 3], [[], [1], [2], [3], [1, 2], [1, 3], [2, 3],
  [1, 2, 3]]);
  testGeneratePowerSet([1, 2, 3, 4], [[], [1], [2], [3], [4], [1, 2], [1, 3],
  [1, 4], [2, 3], [2, 4], [3, 4], [1, 2, 3], [2, 3, 4], [1, 3, 4], [1, 2, 4],
  [1, 2, 3, 4]]);
}

testAll();