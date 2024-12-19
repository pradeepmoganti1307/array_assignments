function getIndices(number, index, indices) {
  if (number === 0) {
    return indices;
  }

  if (number & 1) {
    indices.push(index);
  }
  
  return  getIndices(number >> 1, index + 1, indices);
}

function powerSet(number) {
  const allSubsets = [];
  const maxCombinations = Math.pow(2, number.length);

  for(let index = 0; index < maxCombinations; index++) {
    allSubsets.push(set(numbe));
  }
}