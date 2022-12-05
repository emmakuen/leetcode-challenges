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

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function (matrix) {
  // if any of the cells in the top row is zero, set topRowHasZero to true
  let topRowHasZero = false;
  for (const cell of matrix[0]) {
    if (cell === 0) {
      topRowHasZero = true;
      break;
    }
  }

  // if any of the cells in the left column is zero, set leftColumnHasZero to true
  let leftColumnHasZero = false;
  for (let row of matrix) {
    if (row[0] === 0) {
      leftColumnHasZero = true;
      break;
    }
  }

  // if any cell excluding those in the left column and top row is zero,
  // set the first cells of the corresponding row and column zero
  // this marks which row and column should be set to zero
  for (let row = 1; row < matrix.length; row++) {
    for (let column = 1; column < matrix[0].length; column++) {
      if (matrix[row][column] === 0) {
        matrix[0][column] = 0;
        matrix[row][0] = 0;
      }
    }
  }

  // if any cell in the top row or in the left column is zero, set the cells in that row/column zero
  for (let row = 1; row < matrix.length; row++) {
    for (let column = 1; column < matrix[0].length; column++) {
      if (matrix[row][0] === 0 || matrix[0][column] === 0) {
        matrix[row][column] = 0;
      }
    }
  }

  // if top row had zeroes before it was modified, set all the cells in that row zero
  if (topRowHasZero) {
    for (let column = 0; column < matrix[0].length; column++) {
      matrix[0][column] = 0;
    }
  }

  // if left column had any zeroes before it was modified, set all the cells in that column zero
  if (leftColumnHasZero) {
    for (const row of matrix) {
      row[0] = 0;
    }
  }

  return matrix;
};

// Time Complexity O(nm)
// Space Complexity O(1)
