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

function spiralOrder(matrix) {
  const spiralArray = [];
  // if matrix is empty, return empty array
  if (matrix.length === 0) return spiralArray;

  // initialize variables to keep track of
  // top, left, right, bottom sides of matrix
  let top = 0;
  let left = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;

  // initialize a variable to keep track of spiral direction
  let spiralDirection = "right";

  // if opposing sides of the matrix meet,
  // the spiral should finish
  // therefore, while those sides are apart,
  while (top <= bottom && left <= right) {
    // if spiral is going to right,
    // it will push elements on top row to spiral array
    if (spiralDirection === "right") {
      for (let i = left; i <= right; i++) {
        // push all top elements within index left and right
        spiralArray.push(matrix[top][i]);
      }
      // since the top row is all pushed to spiralArray,
      // increment top index by one to move it down
      top++;
      // set the spiral direction to down
      // it will push elements on the right to spiral array
      spiralDirection = "down";
    } else if (spiralDirection === "down") {
      // if spiral is heading down,
      for (let i = top; i <= bottom; i++) {
        // push all right column elements between top and bottom indices
        // to spiral array
        spiralArray.push(matrix[i][right]);
      }
      // now rightmost column is pushed to spiral array,
      // therefore, move right index to the left by decrementing it
      right--;
      // change the spiral direction to left
      // it will push elements on the bottom to spiral array
      spiralDirection = "left";
      // if spiral is heading left,
    } else if (spiralDirection === "left") {
      // push all bottom row elements between left and right indices
      // to spiral array
      for (let i = right; i >= left; i--) {
        spiralArray.push(matrix[bottom][i]);
      }
      // decrement bottom index by one to move it up
      bottom--;
      // change the direction to up
      spiralDirection = "up";
      // it will push elements on the left to spiral array
    } else if (spiralDirection === "up") {
      for (let i = bottom; i >= top; i--) {
        // push all left column elements between bottom and top index
        // to spiral array
        spiralArray.push(matrix[i][left]);
      }
      // move the left index to right by incrementing
      left++;
      // change spiral direction to right
      spiralDirection = "right";
    }
  }

  return spiralArray;
}
