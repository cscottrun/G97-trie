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
}

module.exports = { Node, Trie };
