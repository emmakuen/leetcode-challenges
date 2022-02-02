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

function uniquePaths(m, n) {
  // Make m x n matrix
  const pathsMatrix = Array(m).fill(Array(n).fill(0));
  // if there's only one row, there's only one unique path.
  // Therefore, assign 1 to each item in the first row.
  pathsMatrix[0] = Array(n).fill(1);

  for (let row = 1; row < m; row++) {
    // if there's only one column, there's one unique path.
    // Therefore, assign 1 to first item of every row.
    pathsMatrix[row][0] = 1;
    for (let column = 1; column < n; column++) {
      // Number of unique paths to any other cell is equal to
      // number of paths of the cell above plus number of paths of the cell to its left
      pathsMatrix[row][column] =
        pathsMatrix[row - 1][column] + pathsMatrix[row][column - 1];
    }
  }

  return pathsMatrix[m - 1][n - 1];
}

// Time Complexity: O(n * m)
// Space Complexity: O(n * m)  --- matrix size
