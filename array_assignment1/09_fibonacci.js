// Write a function that gives first n elements of fibonacci in an array
// fibonacci(5) => [0, 1, 1, 2, 3]
// do not modify input parameters

//mainFunction
function fibonacci(numberOfTerms) {
  const fibonacciTerms = [0];
  let nextTerm = 1;

  for (let index = 1; index < numberOfTerms; index++) {
    fibonacciTerms[index] = nextTerm;
    nextTerm += fibonacciTerms[index - 1];
  }

  return fibonacciTerms;
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

function testFibonacci(numberOfTerms, expected) {
  const result = fibonacci(numberOfTerms);
  const inputSegment = " numberOfTerms :";
  const expectedSegment = "expected :";
  const resultSegment = "result :";

  console.log(areEqual(result, expected) ? "✅" : "❌");
  console.log(inputSegment, numberOfTerms);
  console.log(expectedSegment, expected, resultSegment, result);
  console.log("-----------------------------------------------");
}

function testCases() {
  testFibonacci(0, [0]);
  testFibonacci(1, [0]);
  testFibonacci(2, [0, 1]);
  testFibonacci(3, [0, 1, 1]);
  testFibonacci(4, [0, 1, 1, 2]);
  testFibonacci(5, [0, 1, 1, 2, 3]);
}

testCases();
