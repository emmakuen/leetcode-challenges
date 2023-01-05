/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rowMemo = new Set();
  const colMemos = Array.from(Array(board.length), () => new Set());
  const boxMemos = Array.from(Array(board.length / 3), () => new Set());

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      const cell = board[row][col];

      // if the cell is empty, skip it
      if (cell === ".") continue;

      const boxIndex = Math.floor(col / 3);
      if (
        rowMemo.has(cell) ||
        colMemos[col].has(cell) ||
        boxMemos[boxIndex].has(cell)
      )
        return false;

      rowMemo.add(cell);
      colMemos[col].add(cell);
      boxMemos[boxIndex].add(cell);
    }
    // after iterating through each row, reset the memoized row
    rowMemo.clear();

    // after iterating through every three rows, reset the memoized boxes
    if ((row + 1) % 3 === 0) {
      boxMemos.forEach((memo) => memo.clear());
    }
  }

  return true;
};
