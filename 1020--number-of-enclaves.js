// Define constants for the different cell types
const SEA = 0;
const LAND = 1;
const VISITED_LAND = 2;

// Define the 4 possible directions to move in (up, down, left, right)
const directions = [
  [-1, 0], // Up
  [1, 0], // Down
  [0, -1], // Left
  [0, 1], // Right
];

var numEnclaves = function (grid) {
  let landCellCount = 0; // Count of land cells that cannot reach the boundary of the grid
  const ROWS = grid.length;
  const COLS = grid[0].length;

  // Any land cell that is connected to a boundary cell can reach the boundary of the grid
  // So, we need to visit those cells first and then start counting the enclave cells

  // Visit the land cells on the left and right edges of the grid
  for (let row = 0; row < ROWS; row++) {
    if (grid[row][0] === LAND) visitLand(row, 0, false); // Check left edge
    if (grid[row][COLS - 1] === LAND) visitLand(row, COLS - 1, false); // Check right edge
  }

  // Visit the land cells on the top and bottom edges of the grid
  for (let col = 0; col < COLS; col++) {
    if (grid[0][col] === LAND) visitLand(0, col, false); // Check top edge
    if (grid[ROWS - 1][col] === LAND) visitLand(ROWS - 1, col, false); // Check bottom edge
  }

  // We cannot reach the boundary of the grid from the remaining land cells
  // So, visit and count those cells
  for (let row = 1; row < ROWS - 1; row++) {
    for (let col = 1; col < COLS - 1; col++) {
      if (grid[row][col] === LAND) {
        visitLand(row, col, true);
      }
    }
  }

  // Return the count of land cells that cannot reach the boundary of the grid
  return landCellCount;

  // Define a helper DFS function to recursively visit land cells and mark them as visited
  function visitLand(row, col, isEnclave) {
    // Check if the cell is out of bounds, not a land cell, or has already been visited
    if (
      row >= grid.length ||
      col >= grid[0].length ||
      row < 0 ||
      col < 0 ||
      grid[row][col] !== LAND
    ) {
      return; // End recursion for invalid cells
    }

    // Increment count for the enclave land cells
    if (isEnclave) landCellCount++;
    grid[row][col] = VISITED_LAND; // Mark the cell as visited
    for (const [rowDir, colDir] of directions) {
      visitLand(row + rowDir, col + colDir, isEnclave); // Visit adjacent land cells recursively
    }
  }
};
