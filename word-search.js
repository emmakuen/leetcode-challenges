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

function exist(board, word) {
  let isFound = false;

  const dfs = (row, col, word, count) => {
    if (count === word.length) {
      isFound = true;
      return;
    }

    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[0].length ||
      board[row][col] !== word.charAt(count) ||
      isFound
    ) {
      return;
    }

    const temp = board[row][col];
    board[row][col] = "";

    dfs(row + 1, col, word, count + 1);
    dfs(row - 1, col, word, count + 1);
    dfs(row, col + 1, word, count + 1);
    dfs(row, col - 1, word, count + 1);
    board[row][col] = temp;
  };

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === word.charAt(0)) {
        dfs(row, col, word, 0);
      }
    }
  }

  return isFound;
}
