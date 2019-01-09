class Node {
  constructor(key) {
    (this.key = ""),
      (this.parent = null),
      (this.children = []),
      (this.end = false);
  }
}

class Trie {
  constructor() {
    this.root = new Node(null);
  }
  insert(word) {
    let node = this.root;
    for (let i = 0 ; i < word.length; i++) {
      if (!node.children[word[i]]) {
        node.children[word[i]] = new Node(word[i]);
        node.children[word[i]].parent = node;
      }

      node = node.children[word[i]];
      if (i == word.length-1) {
        node.end = true;
      }
    }
  };
  


}

module.exports = { Node, Trie };
