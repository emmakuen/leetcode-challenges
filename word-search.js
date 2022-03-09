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
  // initialize a variable to keep track of the search result
  // and set it to false initially
  let isFound = false;

  // for each cell of the board
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      // if the character in the current cell matches
      // the first character of the word,
      // start the depth first search
      if (board[row][col] === word[0]) {
        dfs(row, col, word, 0);
      }
    }
  }

  // initialize a depth search function
  function dfs(row, col, word, count) {
    // if letter count equals the word length,
    // the word has been found
    if (count === word.length) {
      // therefore, set isFound variable to true
      // and exit the function
      isFound = true;
      return;
    }

    const isOutOfBound =
      row < 0 || row >= board.length || col < 0 || col >= board[0].length;

    // else,
    // if search is out of bound
    // or character in the board cell doesn't match
    // the character of the word currently being searched
    // exit the function
    if (isFound || isOutOfBound || board[row][col] !== word[count]) return;

    // else, initialize a temporary variable
    // and save the current character in it
    const temp = board[row][col];
    // assign empty string to current cell
    // to avoid visiting it again
    board[row][col] = "";

    // conduct depth first search recursively on
    // the cell to the bottom of current cell (row + 1)
    dfs(row + 1, col, word, count + 1);
    // the cell to the top of current cell (row - 1)
    dfs(row - 1, col, word, count + 1);
    // the cell to the right of current cell (col + 1)
    dfs(row, col + 1, word, count + 1);
    // the cell to the left of current cell (col - 1)
    dfs(row, col - 1, word, count + 1);

    // when the search finishes, reset the current cell
    // to its original value
    board[row][col] = temp;
  }

  // return the search result
  return isFound;
}
