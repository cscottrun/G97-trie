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

  contains(word) {
  	if(!this.root) {
    return false;
	  }
	  return this._contains(this.root, word);
  }
  _contains(node, word) {
    let letter = word[0]
  	let child = node.children[letter];
  	if (child) {
  		let remainder = word.substring(1);
  		if (!remainder && child.end) {
  			return true;
  		} else {
  			return this._contains(child, remainder);
  		}
  	} else {
  		return false;
  	}
  };

  remove (word) {
  	if (!this.root) {
  		return;
  	}
  	if (this.contains(word)) {
  		this._removeNode(this.root,word);
  	}
  };

  _removeNode(node, word) {
  	if (!node || !word) {
  		return;
  	}
  	let letter = word[0];
  	let child = node.children[letter];
  	if (child) {
  		let remainder = word.substring(1);
  		if (remainder) {
  			if (Object.keys(child.children).length === 1) {
  				delete node.children[letter];
  			} else {
  				this._removeNode(child, remainder);
  			}
  		} else {
  			if (Object.keys(child.children).length === 0) {
  				delete node.children[letter];
  			} else {
  				child.end = false;
  			}
  		}
  	}
  };



};


module.exports = { Node, Trie };
