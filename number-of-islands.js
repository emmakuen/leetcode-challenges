// 200. Number of Islands

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),
// return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or
// vertically. You may assume all four edges of the grid are all surrounded by water.

// --- Examples
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Input: grid = [
//     ["1","1","0","0","0"],
//     ["1","1","0","0","0"],
//     ["0","0","1","0","0"],
//     ["0","0","0","1","1"]
//   ]
//   Output: 3
// --- Constraints
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  let count = 0;
  const updated = [];

  function dfs(row, column) {
    if (
      row >= grid.length ||
      column >= grid[0].length ||
      row < 0 ||
      column < 0 ||
      grid[row][column] !== "1"
    )
      return;

    updated.push([row, column]);
    grid[row][column] = "";

    dfs(row + 1, column);
    dfs(row - 1, column);
    dfs(row, column + 1);
    dfs(row, column - 1);
  }

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (grid[row][column] === "1") {
        count++;
        dfs(row, column);
      }
    }
  }

  for (let i = 0; i < updated.length; i++) {
    const [row, column] = updated[i];
    grid[row][column] = "1";
  }

  return count;
}
