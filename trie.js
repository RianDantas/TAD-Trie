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
const t = new Trie();

// Inserindo palavras
t.insert("cachorro");
t.insert("boliche");
t.insert("carro");

// Testando busca de palavras
console.log(t.search("cachorro")); // true
console.log(t.search("cachoro")); // false
console.log(t.startsWith("cach")); // true
console.log(t.startsWith("cac")); // true
console.log(t.startsWith("caro")); // false