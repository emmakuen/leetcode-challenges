function stringifyCell(row, column) {
  return `${row},${column}`;
}

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = function (heights) {
  const cellsToPacific = new Set();
  const cellsToAtlantic = new Set();
  const cellsToPacificAtlantic = [];

  function dfs(row, column, previousHeight, cells) {
    if (
      row < 0 ||
      column < 0 ||
      row >= heights.length ||
      column >= heights[0].length ||
      heights[row][column] < previousHeight ||
      cells.has(stringifyCell(row, column))
    ) {
      return;
    }

    cells.add(stringifyCell(row, column));

    const currentHeight = heights[row][column];

    dfs(row + 1, column, currentHeight, cells);
    dfs(row - 1, column, currentHeight, cells);
    dfs(row, column + 1, currentHeight, cells);
    dfs(row, column - 1, currentHeight, cells);
  }

  for (let column = 0; column < heights[0].length; column++) {
    const firstRow = 0;
    const lastRow = heights.length - 1;
    // conduct dfs on top row to search for cells that can reach pacific
    dfs(firstRow, column, heights[0][column], cellsToPacific);
    // conduct dfs on bottom row to search for cells that can reach atlantic
    dfs(lastRow, column, heights[lastRow][column], cellsToAtlantic);
  }

  for (let row = 0; row < heights.length; row++) {
    const firstColumn = 0;
    const lastColumn = heights[0].length - 1;
    // conduct dfs on leftmost column to search for cells that can reach pacific
    dfs(row, firstColumn, heights[row][firstColumn], cellsToPacific);
    // conduct dfs on rightmost column to search for cells that can reach atlantic
    dfs(row, lastColumn, heights[row][lastColumn], cellsToAtlantic);
  }

  for (let row = 0; row < heights.length; row++) {
    for (let column = 0; column < heights[0].length; column++) {
      const currentCell = stringifyCell(row, column);
      // if the current cell can reach both oceans, add it to the array
      if (cellsToAtlantic.has(currentCell) && cellsToPacific.has(currentCell)) {
        cellsToPacificAtlantic.push([row, column]);
      }
    }
  }

  return cellsToPacificAtlantic;
};
