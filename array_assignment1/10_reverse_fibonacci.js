// Write a function that gives first n elements of fibonacci in an array
// fibonacci(5) => [0, 1, 1, 2, 3]
// do not modify input parameters

function reverse(array) {
  const reversedArray = [];

  for (let index = 0; index < array.length; index++) {
    const complementaryIndex = array.length - 1 - index;
    reversedArray[index] = array[complementaryIndex];
  }

  return reversedArray;
}

function fibonacci(numberOfTerms) {
  const fibonacciTerms = [0];
  let nextTerm = 1;

  for (let index = 1; index < numberOfTerms; index++) {
    fibonacciTerms[index] = nextTerm;
    nextTerm += fibonacciTerms[index - 1];
  }

  return fibonacciTerms;
}

//mainFunction
function reverseFibonacci(numberOfTerms) {
  const fibonacciTerms = fibonacci(numberOfTerms);

  return reverse(fibonacciTerms);
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

function testReverseFibonacci(numberOfTerms, expected) {
  const result = reverseFibonacci(numberOfTerms);
  const inputSegment = " numberOfTerms :";
  const expectedSegment = "expected :";
  const resultSegment = "result :";

  console.log(areEqual(result, expected) ? '✅' : '❌');
  console.log(inputSegment, numberOfTerms);
  console.log(expectedSegment, expected, resultSegment, result);
  console.log('-----------------------------------------------');
}

function testCases() {
  testReverseFibonacci(0, [0]);
  testReverseFibonacci(1, [0]);
  testReverseFibonacci(2, [1, 0]);
  testReverseFibonacci(3, [1, 1, 0]);
  testReverseFibonacci(4, [2, 1, 1, 0]);
  testReverseFibonacci(5, [3, 2, 1, 1, 0]);
}

testCases();