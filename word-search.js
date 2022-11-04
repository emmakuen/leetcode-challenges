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
    if (wordIndex >= word.length) {
      isFound = true;
      return;
    }

    if (
      row >= ROW_LENGTH ||
      row < 0 ||
      column >= COLUMN_LENGTH ||
      column < 0 ||
      word[wordIndex] !== board[row][column] ||
      isFound
    )
      return;

    const character = board[row][column];
    board[row][column] = "";

    dfs(row + 1, column, wordIndex + 1);
    dfs(row - 1, column, wordIndex + 1);
    dfs(row, column + 1, wordIndex + 1);
    dfs(row, column - 1, wordIndex + 1);

    board[row][column] = character;
  }

  for (let row = 0; row < ROW_LENGTH; row++) {
    for (let column = 0; column < COLUMN_LENGTH; column++) {
      if (isFound) return true;
      if (board[row][column] === word[0]) {
        dfs(row, column, 0);
      }
    }
  }

  return isFound;
};
