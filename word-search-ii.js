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
    const dfs = (root, index) => {
      let current = root;

      for (let i = index; i < word.length; i++) {
        const char = word[i];
        if (char === ".") {
          for (const child of Object.values(current.children)) {
            if (dfs(child, i + 1)) return true;
          }

          return false;
        } else if (!(char in current.children)) return false;
        else current = current.children[char];
      }

      return current.isEndOfWord;
    };

    return dfs(this.root, 0);
  }
}
