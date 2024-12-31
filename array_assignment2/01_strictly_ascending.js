// Given an array of numbers true if numbers are in strictly ascending order
// otherwise false.
// isStrictlyAscending([1, 3, 4, 5, 16]) => true
// isStrictlyAscending([1, 3, 2, 4]) => false
// isStrictlyAscending([1, 3, 3, 4]) => false

export function isStrictlyAscending(numbers) {
  for (let index = 1; index < numbers.length; index++) {
    if (numbers[index - 1] >= numbers[index]) {
      return false;
    }
  }

  return true;
}
