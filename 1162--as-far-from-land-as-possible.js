// Given an n x n grid containing only values 0 and 1, where 0 represents water and 1 represents land,
// find a water cell such that its distance to the nearest land cell is maximized, and return the distance.
// If no land or water exists in the grid, return -1.

// The distance used in this problem is the Manhattan distance: the distance between two cells (x0, y0)
// and (x1, y1) is |x0 - x1| + |y0 - y1|.

// --- Examples
// Input: grid = [[1,0,1],[0,0,0],[1,0,1]]
// Output: 2
// Explanation: The cell (1, 1) is as far as possible from all the land with distance 2.
// Input: grid = [[1,0,0],[0,0,0],[0,0,0]]
// Output: 4
// Explanation: The cell (2, 2) is as far as possible from all the land with distance 4.

// --- Constraints
// n == grid.length
// n == grid[i].length
// 1 <= n <= 100
// grid[i][j] is 0 or 1

const directions = [
  // [row, col]
  [-1, 0], // left
  [0, -1], // right
  [1, 0], // bottom
  [0, 1], // top
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxDistance = function (grid) {
  // create a grid to track which cells are visited to avoid revisit
  const isVisited = Array.from(Array(grid.length), () =>
    Array(grid.length).fill(false)
  );
  const queue = [];

  // find the cells that contain land and push their adjacent cells to the queue
  // these cells are all 1 step away from the land
  // to avoid visiting cells that have land, mark them as visited
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        queue.push([row, col]);
        isVisited[row][col] = true;
      }
    }
  }

  let distance = -1;
  // iterate over the queue until it's empty
  while (queue.length > 0) {
    // iterate over coordinates that were already here when the loop started
    // this way, we can iterate over cells that has the same distance from land in each loop
    const currentLength = queue.length;

    for (let i = 0; i < currentLength; i++) {
      // remove a coordinate from the beginning of the queue
      const coordinate = queue.shift();

      // iterate to each direction
      for (const direction of directions) {
        const row = coordinate[0] + direction[0];
        const col = coordinate[1] + direction[1];

        // if the current row & col are within the range of the grid
        // and if the cell at this coordinate has not been visited previously,
        // push the coordinate to the queue and mark the cell visited
        if (
          row >= 0 &&
          col >= 0 &&
          row < grid.length &&
          col < grid[0].length &&
          !isVisited[row][col]
        ) {
          queue.push([row, col]);
          isVisited[row][col] = true;
        }
      }
    }

    // after the loop finishes, now the queue contains the cells that are 1 more step away
    // therefore, increment the distance before the next iteration
    distance++;
  }

  return distance === 0 ? -1 : distance;
};
