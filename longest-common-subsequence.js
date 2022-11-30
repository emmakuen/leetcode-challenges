// 1143. Longest Common Subsequence

/**
 * @param {string} textForRow
 * @param {string} textForColumn
 * @return {number}
 */
const longestCommonSubsequence = function (textForRow, textForColumn) {
  // imagine both word as a 2D grid
  // we need additional 1 row and 1 column that would help us calculate the values of the last column & last row cells with more ease

  // create the additional row first and label it the bottom row
  // notice that we're adding 1 to the length to create the additional column cell
  // assign zero to each cell to assume we have 0 subsequence starting from that cell
  let bottomRow = Array(textForColumn.length + 1).fill(0);

  // iterate over the text for row from the end
  for (let row = textForRow.length - 1; row >= 0; row--) {
    // for each character of the text for row, create a new row and assign 0 to each cell
    const currentRow = Array(textForColumn.length + 1).fill(0);

    // then iterate over each character of the textColumn from the end
    for (let column = textForColumn.length - 1; column >= 0; column--) {
      // if the current character in the row matches the character in the column
      if (textForRow[row] === textForColumn[column]) {
        // it's max length of subsequence is equal to one plus the memoized value in its bottom right diagonal row (one represents the current character)
        currentRow[column] = bottomRow[column + 1] + 1;
      } else {
        // if they don't match, the max length of subsequence for the current character is equal to whichever's greater of
        // the memoized values of its bottom cell and its right cell
        currentRow[column] = Math.max(
          bottomRow[column],
          currentRow[column + 1]
        );
      }
    }

    // after we finish iterating over the text for the column, we move up to the next row
    // then the current row becomes the bottom row of that next row
    bottomRow = currentRow;
  }

  // after the outer loop finishes, the longest common subsequence possible is memoized in the first cell of the row
  // return that value
  return bottomRow[0];
};
