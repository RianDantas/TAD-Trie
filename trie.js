class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }
    
    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }
    
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}

// Criando uma Trie
const trie = new Trie();

// Inserindo palavras na trie
trie.insert("cachorro");
trie.insert("boliche");
trie.insert("carro");

// Testando o método de buscar de palavras (search) e o método de inicia com (startsWith)
console.log(trie.search("cachorro")); // true
console.log(trie.search("cachoro")); // false
console.log(trie.startsWith("cach")); // true
console.log(trie.startsWith("cac")); // true
console.log(trie.startsWith("caro")); // false