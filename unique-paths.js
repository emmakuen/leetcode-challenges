// 62. Unique Paths

/** 
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

--- Examples
    Input: m = 3, n = 7
    Output: 28

    Input: m = 3, n = 2
    Output: 3
    Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
    1. Right -> Down -> Down
    2. Down -> Down -> Right
    3. Down -> Right -> Down

--- Constraints:
    1 <= m, n <= 100
*/

/**
 * @param {number} rowCount
 * @param {number} columnCount
 * @return {number}
 */
const uniquePaths = function (rowCount, columnCount) {
  // if there's only one row or column, there would be only one path (going straight) to the destination
  if (rowCount === 1 || columnCount === 1) return 1;

  // create a grid excepting the last row and initially assign zero to each cell
  // each cell in this grid represents the number of unique paths to reach the destination starting from that cell
  const grid = Array(rowCount - 1).fill(Array(columnCount).fill(0));

  // from each cell of the bottom row, there's only one path of reaching the destination (move to the right)
  // so when adding the last row to the grid, assign one to each of its cells
  grid.push(Array(columnCount).fill(1));

  // from each cell of the last column, there's only one path of reaching the destination (move down everytime)
  for (let row = 0; row < rowCount; row++) {
    grid[row][columnCount - 1] = 1;
  }

  // for the remaining cells, iterate from the second last row & column
  for (let row = rowCount - 2; row >= 0; row--) {
    for (let column = columnCount - 2; column >= 0; column--) {
      // from each of these cells, the number of ways of reaching the destination is equal to the sum of memoized values of its right cell and its bottom cell
      grid[row][column] = grid[row + 1][column] + grid[row][column + 1];
    }
  }

  // after the loop, now we know the number of ways to reach the destination from the starting cell
  // return that value
  return grid[0][0];
};

// Time Complexity: O(n * m)
// Space Complexity: O(n * m)

// ********************************************** //
// ************* MORE EFFICIENT SOLUTION ******** //
/**
 * @param {number} rowCount
 * @param {number} columnCount
 * @return {number}
 */
const uniquePaths1 = (rowCount, columnCount) => {
  // create the bottom row
  // from each cell of the bottom row, there's only one unique path to reach the destination
  let bottomRow = Array(columnCount).fill(1);

  // for each of the remaining rows
  for (let row = 0; row < rowCount - 1; row++) {
    const currentRow = Array(columnCount);
    // from each cell of the last column, there's only one unique path to reach the destination, so assign it 1
    currentRow[columnCount - 1] = 1;

    // for each of the remaining cells, their value is equal to the sum of the memoized values of their right cell and bottom cell
    for (let column = columnCount - 2; column >= 0; column--) {
      currentRow[column] = bottomRow[column] + currentRow[column + 1];
    }
    // after each iteration, we move up one row
    // so the current row becomes the bottom row of its next row
    bottomRow = currentRow;
  }

  // after the loop finishes, now we're at the top row
  // so, we can return the number of unique paths from the starting cell as follows:
  return bottomRow[0];
};

// Time Complexity: O(n * m)
// Space Complexity: O(n)  --- row size
