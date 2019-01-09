const expect = require('chai').expect; // eslint-disable-line
const Trie = require('../trie.js');

describe("Basic", () => {
  it("should add correctly", () => {
    expect(1+1).to.eql(2)
  })
})

describe('Trie', () => {
  it('can be initialized', () => {
    const t = new Trie();
  });
});
