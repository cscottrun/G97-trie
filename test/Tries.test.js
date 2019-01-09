const expect = require("chai").expect; // eslint-disable-line
const { Node, Trie } = require("../trie.js");

const testTrie = new Trie();

describe("Node for Trie", () => {
  it("should create a new node", () => {
    const node = new Node();
    expect(node).to.eql({ key: "", parent: null, children: [], end: false });
  });
});
describe("Trie", () => {
  it("can be initialized", () => {
    expect(testTrie).to.eql({
      root: { key: "", parent: null, children: [], end: false }
    });
  });
  it("should insert word to Trie", () => {
    let firstWord = testTrie.insert("a");
    let secondWord = testTrie.insert("and");
    let thirdWord = testTrie.insert("be");

    expect(firstWord).to.eq({
      root: {
        key: "",
        parent: null,
        children: [{ key: "a", parent: null, children: [], end: true }],
        end: false
      }
    });
    expect(testTrie.root.children).to.have.length(1);

    expect(secondWord).to.eq({
      root: {
        key: "",
        parent: null,
        children: [
          {
            key: "a",
            parent: null,
            children: [
              {
                key: "n",
                parent: null,
                children: [{ key: "d", parent: null, children: [], end: true }],
                end: false
              }
            ],
            end: true
          }
        ],
        end: false
      }
    });
    expect(thirdWord).to.eq({
      root: {
        key: "",
        parent: null,
        children: [
          {
            key: "b",
            parent: null,
            children: [{ key: "e", parent: null, children: [], end: true }],
            end: false
          }
        ],
        end: false
      }
    });
    expect(testTrie.root.children).to.have.length(2);
  });
});
