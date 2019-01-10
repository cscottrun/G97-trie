class Node {
  constructor(key) {
    this.key= key,
    this.children= {},
    this.end= false
  }
};

class Trie {
  constructor() {
    this.root = new Node(null);
  }

  insert (word) {
	  let  node = this.root;
	  for(var i = 0; i < word.length; i++) {
	    if (!node.children[word[i]]) {
	      node.children[word[i]] = new Node(word[i]);
	    }
	    node = node.children[word[i]];
	    if (i == word.length-1) {
	      node.end = true;
	    }
	  }
  };
}

let myTrie = new Trie;
myTrie.insert('a');
myTrie.insert('and');

console.log(myTrie.root.children.a)
module.exports = { Node, Trie };
