// Design a data structure that supports adding new words and finding if a string matches any previously added string.

// Implement the WordDictionary class:

// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

// --- Examples
// Input
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// Output
// [null,null,null,null,false,true,true,true]

// Explanation
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True

class Node {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new Node();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let current = this.root;

    for (const char of word) {
      if (!(char in current.children)) {
        current.children[char] = new Node();
      }
      current = current.children[char];
    }
    current.isEndOfWord = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    // the dot can be any character, so we have to recursively search through the word dictionary for a path that has the remaining characters in the search word
    // therefore, we should implement the depth-first search

    const dfs = (root, index) => {
      let current = root;

      // iterate over each character of the word starting from the given index
      for (let i = index; i < word.length; i++) {
        const char = word[i];
        // if the current character is a dot,
        if (char === ".") {
          for (const child of Object.values(current.children)) {
            // call dfs recursively on each child of the current node
            // return true if dfs finds the word
            if (dfs(child, i + 1)) return true;
          }

          // if there's no match after dfs, return false
          return false;

          // if the current character is not a dot and it's not in the current node's children, there's no match
          // so return false
        } else if (!(char in current.children)) return false;
        // if the current character is not a dot and it's in the current node's children, move the current pointer to that child node
        else current = current.children[char];
      }

      // if the word is found, return true if it's the end of the word
      // return false if it's not the end of the word
      return current.isEndOfWord;
    };

    // call the dfs function and return its result
    return dfs(this.root, 0);
  }
}
