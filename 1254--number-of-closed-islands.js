// Set constants for the different types of cells in the grid
const land = 0;
const water = 1;
const visitedLand = 2;

// Set up the four possible directions to move from a given cell
const directions = [
  [1, 0], // Down
  [0, 1], // Right
  [-1, 0], // Up
  [0, -1], // Left
];

// Define the main function that counts the number of closed islands in the grid
var closedIsland = function (grid) {
  // Initialize a counter for the number of closed islands
  let closedIslandCount = 0;

  // Loop through every cell in the grid
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      // If the current cell is land and forms a closed island, increment the counter
      if (grid[row][col] === land && isClosedIsland(row, col)) {
        closedIslandCount++;
      }
    }
  }

  // Return the final count of closed islands
  return closedIslandCount;

  // Define the helper function that checks if a given cell is part of a closed island
  function isClosedIsland(startRow, startCol) {
    // Mark the starting cell as visited
    grid[startRow][startCol] = visitedLand;

    // Initialize a queue to hold cells to visit and a flag to track if the island is closed
    const queue = [[startRow, startCol]];
    let isClosed = true;

    // Loop through the queue until it's empty
    while (queue.length > 0) {
      // Remove the next cell from the front of the queue and check its neighbors
      const [row, col] = queue.shift();
      for (const [rowDir, colDir] of directions) {
        // Calculate the row and column indices of the neighbor cell
        const nextRow = row + rowDir;
        const nextCol = col + colDir;

        // If the neighbor cell is outside the grid, the island is open
        if (
          nextRow >= grid.length ||
          nextRow < 0 ||
          nextCol >= grid[0].length ||
          nextCol < 0
        ) {
          isClosed = false;
        }
        // If the neighbor cell is land and hasn't been visited yet, add it to the queue
        else if (grid[nextRow][nextCol] === land) {
          grid[nextRow][nextCol] = visitedLand;
          queue.push([nextRow, nextCol]);
        }
      }
    }

    // Return whether the island is closed
    return isClosed;
  }
};
