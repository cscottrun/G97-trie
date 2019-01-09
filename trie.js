class Trie {
  constructor(key) {
    this.key = '',
    this.parent= null,
    this.children= {},
    this.end = false
  };
};

module.exports = Trie;