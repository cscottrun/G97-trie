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
      console.log("testTrie", testTrie.insert("a"));
      expect(testTrie.insert("a")).to.eql({
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

  // REMOVE METHOD
  describe("Removal method", () => {
    it("should remove 'anna' from Trie", () => {
      const testTrie2 = new Trie();
      const a = testTrie2.insert("a");
      const at = testTrie2.insert("at");
      const an = testTrie2.insert("an");
      const and = testTrie2.insert("and");
      const anna = testTrie2.insert("anna");
      expect(testTrie2.remove("anna")).to.eql(and);
    });
    it("should remove 'and' from Trie", () => {
      expect(testTrie2.remove("and")).to.eql(an);
    });
  });

  // SEARCH METHOD
  describe("Depth First search for words given a prefix", () => {
    it("should provide a list of words, depth first", () => {
      const testTrie3 = new Trie();
      const a = testTrie2.insert("a");
      const at = testTrie2.insert("at");
      const an = testTrie2.insert("an");
      const and = testTrie2.insert("and");
      const anna = testTrie2.insert("anna");
      expect(testTrie3.search("a").to.eql(["a", "an", "and", "anna", "at"]));
      expect(testTrie3.search("an").to.eql(["an", "and", "anna"]));
    });
  });
  describe("Breadth First search for words given a prefix", () => {
    it("should provide a list of words, depth first", () => {
      const testTrie3 = new Trie();
      const a = testTrie2.insert("a");
      const at = testTrie2.insert("at");
      const an = testTrie2.insert("an");
      const and = testTrie2.insert("and");
      const anna = testTrie2.insert("anna");
      expect(testTrie3.search("a").to.eql(["a", "an", "at", "and", "anna"]));
      expect(testTrie3.search("an").to.eql(["an", "and", "anna"]));
    });
  });
});
