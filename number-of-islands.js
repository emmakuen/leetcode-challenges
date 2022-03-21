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

function numIslands(grid) {
  // initialize a variable to keep track of island count
  let islandCount = 0;
  // iterate on each cell of the grid
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      // if the current cell is land
      if (grid[row][col] === "1") {
        // increment island count
        islandCount++;
        // conduct breadth-first search on the current cell
        bfs(grid, row, col);
      }
    }
  }

  // define breadth first search function
  function bfs(grid, row, col) {
    const isOutsideGrid =
      row < 0 || row >= grid.length || col < 0 || col >= grid[0].length;

    // if the current cell is outside grid or it's water, end the breadth first search
    if (isOutsideGrid || grid[row][col] === "0") return;
    // else, sink the current land to avoid conducting bfs on it again
    grid[row][col] = "0";
    // to find the adjacent land masses that constitute the island,
    // conduct breadth first search on current cell's neighbors
    // on the right,
    bfs(grid, row + 1, col);
    // on the left,
    bfs(grid, row - 1, col);
    // below,
    bfs(grid, row, col + 1);
    // above,
    bfs(grid, row, col - 1);
  }

  // return the island count
  return islandCount;
}
