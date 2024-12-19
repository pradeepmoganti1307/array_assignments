function isValidMatrix(matrix) {
  for (let index = 0; index < matrix.length; index++) {
    if (matrix[0].length !== matrix[index].length) {
      return false;
    }
  }

  return true;
}

function isCompatible(matrixA, matrixB) {
  if (matrixA.length === 0) {
    return matrixB.length === 0 ? true : false;
  }

  const areValidMatrices = isValidMatrix(matrixA) || isValidMatrix(matrixB);
  const isMultiplicationCompatible = matrixA[0].length === matrixB.length;

  if (!areValidMatrices || !isMultiplicationCompatible) {
    return false;
  }

  return true;
}

function calculateElement(matrixA, matrixB, rowInMatrixA, column) {
  let element = 0;

  for (let row = 0; row < matrixB.length; row++) {
    element += matrixA[rowInMatrixA][row] * matrixB[row][column];
  }

  return element;
}

function calculateRow(matrixA, matrixB, rowInMatrixA) {
  const rowInMatrix = [];

  for (let column = 0; column < matrixB[0].length; column++) {
    const element = calculateElement(matrixA, matrixB, rowInMatrixA, column);
    rowInMatrix.push(element);
  }

  return rowInMatrix;
}

function productOfMatrices(matrixA, matrixB) {
  const resultingMatrix = [];

  for (let row = 0; row < matrixA.length; row++) {
    const rowInResultMatrix = calculateRow(matrixA, matrixB, row);
    resultingMatrix.push(rowInResultMatrix);
  }

  return resultingMatrix;
}

function multiplyMatrices(matrixA, matrixB) {
  if (!isCompatible(matrixA, matrixB)) {
    return NaN;
  }

  return productOfMatrices(matrixA, matrixB);
}

/*----------- Testing Section Starts Here -------------------------*/

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

function areNestedArraysEqual(nestedArray1, nestedArray2) {
  if (nestedArray1.length !== nestedArray2.length) {
    return false;
  }

  for (let index = 0; index < nestedArray1.length; index++) {
    if (!areEqual(nestedArray1[index], nestedArray2[index])) {
      return false;
    }
  }

  return true;
}

function testMuliplyMatrices(matrixA, matrixB, expected) {
  const result = multiplyMatrices(matrixA, matrixB);
  const input1 = 'matrixA :';
  const input2 = 'matrixB :';
  const resultSegment = 'resultantMatrix :';
  const expectedSegment = 'expected :';

  console.log(areNestedArraysEqual(result, expected) ? '✅' : '❌');
  console.log(input1, matrixA);
  console.log(input2, matrixB);
  console.log(resultSegment, result);
  console.log(expectedSegment, expected);
  console.log('-'.repeat(25));
}

/*------------- Test Cases -------------------*/

function emptyTestCases() {
  testMuliplyMatrices([], [], []);
  testMuliplyMatrices([[]], [[]], [[]]);
}

function NaNTestCases() {
  const testMatrixA = [[1, 2, 3], [1, 2, 3]];
  const testMatrixB = [[1, 2, 3], [1, 2, 3]];

  testMuliplyMatrices(testMatrixA, testMatrixB, NaN);
  testMuliplyMatrices([[1, 2]], [], NaN);
  testMuliplyMatrices([], [[1, 2]], NaN);
  testMuliplyMatrices([[1, 2, 3], [1, 2]], [[1, 2], [1, 2]], NaN);
  testMuliplyMatrices([[1, 2, 3], [1, 2, 3]], [[1], [1, 2]], NaN);
}

function testAll() {
  validTestCases();
  emptyTestCases();
  NaNTestCases();
}

testAll();

function validTestCases() {
  const test1MatrixA = [[1, 2], [1, 2]];
  const test1MatrixB = [[1, 2, 3], [1, 2, 3]];
  const test1result = [[3, 6, 9], [3, 6, 9]];
  testMuliplyMatrices(test1MatrixA, test1MatrixB, test1result);

  const test2MatrixA = [[1, 2, 3], [4, 5, 6]];
  const test2MatrixB = [[7, 8], [9, 10], [11, 12]];
  const test2result = [[58, 64], [139, 154]];
  testMuliplyMatrices(test2MatrixA, test2MatrixB, test2result);

  const test3MatrixA = [[1, 2], [1, 2]];
  const test3MatrixB = [[1, 2], [1, 2]];
  const test3result = [[3, 6], [3, 6]];
  testMuliplyMatrices(test3MatrixA, test3MatrixB, test3result);
}
