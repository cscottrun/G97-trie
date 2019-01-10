const expect = require("chai").expect; // eslint-disable-line
const { Node, Trie } = require("../trie.js");


describe("Node for Trie", () => {
  it("should create a new node", () => {
    expect(new Node('x')).to.eql({ key: 'x', children: {}, end: false });
  });
});

describe("Trie constructed", () => {
  it("should create a new trie", () => {
    expect(new Trie).to.eql({ root: { key: null, children: {}, end: false } });
  });
});

describe("Word inserted to Trie", () => {
  it("should add word 'a' ", () => {
    let myTrie = new Trie;
    myTrie.insert('a');
    expect(myTrie.root).to.eql({
      key: null,
      children: { a: { key: 'a', children: {}, end: true } },
      end: false });
  });
  it("should add word 'and' ", () => {
    let myTrie = new Trie;
    myTrie.insert('and');
    expect(myTrie.root.children.a.children.n.children).to.eql({ d: { key: 'd', children: {}, end: true } });
  });
  it("should add word 'be' ", () => {
    let myTrie = new Trie;
    myTrie.insert('be');
    expect(myTrie.root.children.b.children).to.eql({ e: { key: 'e', children: {}, end: true } });
  });

});

describe("Contains function", () => {
  it("should return boolean for if work exists in trie", () => {
    let myTrie = new Trie;
    myTrie.insert('a');
    myTrie.insert('an');
    myTrie.insert('and');
    myTrie.insert('anna');

    expect(myTrie.root.children.a.children.n.children.n.children).to.eql({ a: { key: 'a', children: {}, end: true } });
    expect(myTrie.contains('anna')).to.eql(true);
    expect(myTrie.contains('bob')).to.eql(false);
  });
});

describe("Remove function", () => {
  it("should remove a word from a trie", () => {
    let myTrie = new Trie;
    myTrie.insert('a');
    myTrie.insert('an');
    myTrie.insert('and');
    myTrie.insert('anna');

    expect(myTrie.root.children.a.children.n.children.n.children).to.eql({ a: { key: 'a', children: {}, end: true } });
    expect(myTrie.contains('anna')).to.eql(true);

    myTrie.remove('anna');
    expect(myTrie.contains('anna')).to.eql(false);
    expect(myTrie.contains('and')).to.eql(true);



  });
});