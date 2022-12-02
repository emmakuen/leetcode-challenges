// 54. Spiral Matrix

// Given an m x n matrix, return all elements of the matrix
// in spiral order.

// --- Examples
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// --- Constraints
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
  const spiraledMatrix = [];
  let leftColumn = 0;
  let rightColumn = matrix[0].length - 1;
  let topRow = 0;
  let bottomRow = matrix.length - 1;

  while (leftColumn <= rightColumn && topRow <= bottomRow) {
    // add every element in the top row and move the pointer down to avoid double counting
    for (let column = leftColumn; column <= rightColumn; column++) {
      spiraledMatrix.push(matrix[topRow][column]);
    }
    topRow++;

    // add every element in the right row and move the pointer to the left
    for (let row = topRow; row <= bottomRow; row++) {
      spiraledMatrix.push(matrix[row][rightColumn]);
    }
    rightColumn--;

    // if any of the left right or top bottom pointers meet, we finished iterating through the matrix cells
    // so break the loop
    if (!(leftColumn <= rightColumn && topRow <= bottomRow)) break;

    // else,
    // add all the elements on the bottom row and move the bottom pointer up
    for (let column = rightColumn; column >= leftColumn; column--) {
      spiraledMatrix.push(matrix[bottomRow][column]);
    }
    bottomRow--;

    // and add all the elements on the left column and move the left pointer to the right
    for (let row = bottomRow; row >= topRow; row--) {
      spiraledMatrix.push(matrix[row][leftColumn]);
    }
    leftColumn++;
  }

  // return the matrix
  return spiraledMatrix;
};
