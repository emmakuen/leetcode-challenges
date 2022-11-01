// Given an m x n board of characters and a list of strings words, return all words on the board.
// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.
// The same letter cell may not be used more than once in a word.

// --- Examples
// Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]
// Input: board = [["a","b"],["c","d"]], words = ["abcb"]
// Output: []

// --- Constraints:
// m == board.length
// n == board[i].length
// 1 <= m, n <= 12
// board[i][j] is a lowercase English letter.
// 1 <= words.length <= 3 * 104
// 1 <= words[i].length <= 10
// words[i] consists of lowercase English letters.
// All the strings of words are unique.

class Node {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let currentNode = this.root;

    for (const character of word) {
      if (!(character in currentNode.children)) {
        currentNode.children[character] = new Node();
      }
      currentNode = currentNode.children[character];
    }

    currentNode.isEndOfWord = true;
  }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (board, words) {
  const trie = new Trie();
  for (const word of words) {
    trie.insert(word);
  }

  // initialize a set to store nonduplicate words that are found
  const wordsFound = new Set();

  function dfs(row, col, word, node) {
    if (!node) return;

    const isOutOfBound =
      row < 0 || row >= board.length || col < 0 || col >= board[0].length;

    if (isOutOfBound || !(board[row][col] in node.children)) return;

    const character = board[row][col];
    word += character;
    node = node.children[character];

    if (node.isEndOfWord) wordsFound.add(word);

    // replace the character in the current cell with an empty string to avoid revisits
    board[row][col] = "";

    dfs(row + 1, col, word, node);
    dfs(row - 1, col, word, node);
    dfs(row, col + 1, word, node);
    dfs(row, col - 1, word, node);

    // restore the character that was in the cell originally
    board[row][col] = character;
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      dfs(row, col, "", trie.root);
    }
  }

  return [...wordsFound];
};
