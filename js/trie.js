function TrieNode() {
    this.children = {};
    this.endOfWord = false;
}

// -- Both syntax works!!
// class TrieNode {
//     constructor() {
//         this.children = {};
//         this.endOfWord = false;
//     }
// }

var Trie = function () {
    this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let curr = this.root;
    for (const ch of word) {
        if (!curr.children[ch]) {
            curr.children[ch] = new TrieNode();
        }
        curr = curr.children[ch];
    }
    curr.endOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let curr = this.root;
    for (const ch of word) {
        if (!curr.children[ch]) {
            return false;
        }
        curr = curr.children[ch];
    }
    return curr.endOfWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let curr = this.root;
    for (const ch of prefix) {
        if (!curr.children[ch]) {
            return false;
        }
        curr = curr.children[ch];
    }
    return true;
};

Trie.prototype.getRoot = function () {
    return this.root;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
