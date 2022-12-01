/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  let leftColumn = 0;
  let rightColumn = matrix[0].length - 1;
  while (leftColumn < rightColumn) {
    let topRow = leftColumn;
    let bottomRow = rightColumn;

    for (let offset = 0; offset < rightColumn - leftColumn; offset++) {
      // memoize top left cell
      const topLeftCell = matrix[topRow][leftColumn + offset];
      // move bottom left to top left
      matrix[topRow][leftColumn + offset] =
        matrix[bottomRow - offset][leftColumn];
      // move bottom right to bottom left
      matrix[bottomRow - offset][leftColumn] =
        matrix[bottomRow][rightColumn - offset];
      // move top right into bottom right
      matrix[bottomRow][rightColumn - offset] =
        matrix[topRow + offset][rightColumn];
      // move top left cell into top right
      matrix[topRow + offset][rightColumn] = topLeftCell;
    }
    // move the left and right column pointers
    leftColumn++;
    rightColumn--;
  }
};
