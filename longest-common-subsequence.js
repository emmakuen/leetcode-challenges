// 1143. Longest Common Subsequence

/**
 * @param {string} textForRow
 * @param {string} textForColumn
 * @return {number}
 */
const longestCommonSubsequence = function (textForRow, textForColumn) {
  // imagine both words as a 2D grid
  // add additional 1 row and 1 column to the grid that would help us calculate the values of the last column & last row cells with more ease
  // as we're going to iterate only one row at a time, and that row is going to refer to only itself or its bottom row, we don't have to create the whole grid actually
  // we can have 2 rows, 1 representing the memoized previous row (the row on the bottom of the current row), and 1 representing the current row
  // at the end of each iteration, we can update them (current row becomes the bottom row and we create a new row that becomes the current row)

  // create the additional row first and label it the bottom row
  // notice that we're adding 1 to the length to create the additional column cell too
  // assign zero to each cell to assume the max length of a subsequence starting from that cell is zero
  let bottomRow = Array(textForColumn.length + 1).fill(0);

  // iterate over the text for row from the end
  for (let row = textForRow.length - 1; row >= 0; row--) {
    // for the currently iterating character, create a new row and assign 0 to each cell
    const currentRow = Array(textForColumn.length + 1).fill(0);

    // then iterate over each character of the textColumn from the end
    for (let column = textForColumn.length - 1; column >= 0; column--) {
      // if the current character in the row matches the current character of the column
      if (textForRow[row] === textForColumn[column]) {
        // its max length of subsequence is equal to one (representing the current character) plus the memoized value of its bottom right diagonal row
        currentRow[column] = bottomRow[column + 1] + 1;
      } else {
        // if they don't match, the max length of the subsequence starting from the current character is equal to whichever's greater of
        // the memoized values of its bottom cell and its right cell
        currentRow[column] = Math.max(
          bottomRow[column],
          currentRow[column + 1]
        );
      }
    }

    // after we finish iterating over the text for the column, we move up to the next row
    // then the current row becomes the bottom row of that row
    bottomRow = currentRow;
  }

  // after the outer loop finishes, the length of the longest common subsequence possible is memoized in the first cell of the row
  // return that value
  return bottomRow[0];
};
