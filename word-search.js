// 79. Word Search

// Given an m x n grid of characters board and
// a string word, return true if word exists in the grid.

// The word can be constructed from letters of
// sequentially adjacent cells, where adjacent cells are
// horizontally or vertically neighboring. The same letter
// cell may not be used more than once.

// --- Examples
// Input: board = [
//     ["A","B","C","E"],
//     ["S","F","C","S"],
//     ["A","D","E","E"]
// ],
// word = "ABCCED"
// Output: true

// --- Constraints
// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and
// uppercase English letters.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
  const ROW_LENGTH = board.length;
  const COLUMN_LENGTH = board[0].length;
  let isFound = false;

  function dfs(row, column, wordIndex) {
    // if all the characters are found, set the isFound variable to true and exit the function
    if (wordIndex >= word.length) {
      isFound = true;
      return;
    }

    // if row or column is out of bound or current character (board[row][column]) is not the character we're looking for (word[wordIndex]) or the word is already found, exit the function
    if (
      row >= ROW_LENGTH ||
      row < 0 ||
      column >= COLUMN_LENGTH ||
      column < 0 ||
      word[wordIndex] !== board[row][column] ||
      isFound
    )
      return;

    // store the current cell character in a constant and update the cell's value to empty string to avoid reusing it in the recursive calls
    const character = board[row][column];
    board[row][column] = "";

    // recursively call the function on the vertically and horizontally adjacent cells:
    // cell below
    dfs(row + 1, column, wordIndex + 1);
    // cell above
    dfs(row - 1, column, wordIndex + 1);
    // cell on the right
    dfs(row, column + 1, wordIndex + 1);
    // cell on the left
    dfs(row, column - 1, wordIndex + 1);

    // restore the original value of the cell after the recursive calls
    board[row][column] = character;
  }

  for (let row = 0; row < ROW_LENGTH; row++) {
    for (let column = 0; column < COLUMN_LENGTH; column++) {
      if (isFound) return true;

      // if a cell's value is equal to the starting character of the word, start the search
      if (board[row][column] === word[0]) {
        dfs(row, column, 0);
      }
    }
  }

  return isFound;
};
