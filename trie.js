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
        node.children[word[i]] = Node
      }
    }
  }
}

module.exports = { Node, Trie };
