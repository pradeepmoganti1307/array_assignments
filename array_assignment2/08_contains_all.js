// Return true if all elements are present in the array regardless of their
// order.
// Otherwise, return false.
// containsAll([1, 2, 3], [2, 1]) => true
// containsAll([1, 2, 3], [2, 1, 4]) => false

function isPresent(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return true;
    }
  }

  return false;
}

function containsAll(array, elements) {
  if (elements.length === 0) {
    return false;
  }

  for (let index = 0; index < elements.length; index++) {
    if (!isPresent(array, elements[index])) {
      return false;
    }
  }

  return true;
}

/*-----------------testing Section Starts From Here ------------------------*/

function testContainsAll(array1, array2, expected) {
  const result = contain;
  const inputSegment = "array :";
  const inputSegment2 = "array2 :";
  const expectedSegment = "expected :";
  const resultSegment = "result :";

  console.log(result === expected ? "✅" : "❌");
  console.log(inputSegment, array1);
  console.log(inputSegment2, array2);
  console.log(expectedSegment, expected, resultSegment, result);
  console.log("-----------------------------------------------");
}

function testCases() {
  testContainsAll([1, 2, 3], [2, 1], true);
  testContainsAll([1, 2, 3], [2, 1, 3], true);
  testContainsAll([1, 2, 3], [2, 1, 4], false);
  testContainsAll([1, 2, 3], [], false);
  testContainsAll([], [2, 1, 4], false);
}

testCases();
