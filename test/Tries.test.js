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
  describe("Instantiation of tree", () => {
    it("can be initialized", () => {
      expect(testTrie).to.eql({
        root: { key: "", parent: null, children: [], end: false }
      });
    });
  });
  describe("Insert method", () => {
    it("should insert first word to Trie", () => {
      let firstWord = testTrie.insert("a");
      expect(firstWord).to.eq({
        root: {
          key: "",
          parent: null,
          children: [{ key: "a", parent: null, children: [], end: true }],
          end: false
        }
      });
      expect(testTrie.root.children).to.have.length(1);
    });
    it("should insert second word to Trie", () => {
      let secondWord = testTrie.insert("and");

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
                  children: [
                    { key: "d", parent: null, children: [], end: true }
                  ],
                  end: false
                }
              ],
              end: true
            }
          ],
          end: false
        }
      });
    });
    it("should insert second word to Trie", () => {
      let thirdWord = testTrie.insert("be");

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
});
