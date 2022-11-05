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
  // define a count variable to keep track of the number of islands
  let count = 0;
  // define updated cells array to keep track of updated cells so that we can revert their value at the end
  const updatedCells = [];

  function dfs(row, column) {
    // if the row or column index is out of bound or the current grid is not a land ("1"), exit the function
    if (
      row >= grid.length ||
      column >= grid[0].length ||
      row < 0 ||
      column < 0 ||
      grid[row][column] !== "1"
    )
      return;

    // update the current cell value to an empty string to avoid double counting
    grid[row][column] = "";
    // add the current cell to the updated cells array
    updatedCells.push([row, column]);

    // do recursive call on vertically and horizontally adjacent cells
    dfs(row + 1, column);
    dfs(row - 1, column);
    dfs(row, column + 1);
    dfs(row, column - 1);
  }

  // on each cell of the grid
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      // if the current cell is a land, add it to the count and call the depth first search function
      if (grid[row][column] === "1") {
        count++;
        dfs(row, column);
      }
    }
  }

  // revert the values of the updated cells
  for (let i = 0; i < updatedCells.length; i++) {
    const [row, column] = updatedCells[i];
    grid[row][column] = "1";
  }

  return count;
}
