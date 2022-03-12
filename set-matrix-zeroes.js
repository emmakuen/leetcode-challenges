// Set Matrix Zeroes
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

// --- Examples
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// --- Constraints
// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -231 <= matrix[i][j] <= 231 - 1

// Follow up:

// A straightforward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?

function setZeroes(matrix) {
  let firstRowHasZero = false;
  let firstColHasZero = false;

  for (let row = 0; row < matrix.length; row++) {
    // if any of the values in the first column is zero
    // set firstColHasZero to true and break the loop
    if (matrix[row][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  for (let col = 0; col < matrix[0].length; col++) {
    // if any of the values in the first row is zero
    // set firstRowHasZero to true and break the loop
    if (matrix[0][col] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  // use first row and column as flags to indicate
  // that the rest of cells have zeroes
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      // if any of the cells is zero
      // set the first cells of the corresponding column and
      // row to zero
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0;
        matrix[row][0] = 0;
      }
    }
  }

  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      // if first cell of corresponding column or row is zero
      // set the entire column or row to zero
      if (matrix[0][col] === 0 || matrix[row][0] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  if (firstColHasZero) {
    // if first column had zero in the first place,
    // set all cells in the first column to zero
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][0] = 0;
    }
  }
  if (firstRowHasZero) {
    // if first row had zero in the first place,
    // set all cells in the first row to zero
    for (let col = 0; col < matrix[0].length; col++) {
      matrix[0][col] = 0;
    }
  }

  // return the updated matrix
  return matrix;
}

// Time Complexity O(nm)
// Space Complexity O(1)
