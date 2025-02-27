# TAD-Trie

## Introdução

A **Trie** , também conhecida como **árvore prefixada**, é uma estrutura de dados que se parece com uma árvore de busca binária, geralmente utilizada para implementar dicionários e fazer pesquisa em textos. Os elementos em uma Trie são chamados nó.

## Características Principais

- Cada nó representa um caractere.
- As palavras são formadas ao percorrer os caminhos da raiz até os nós folha.
- Permite busca eficiente de palavras e prefixos.


---

## Implementação de uma Trie em JavaScript

### Passo 1: Criando a Classe `TrieNode`

Cada nó da Trie contém:
- Um objeto para armazenar os filhos.
- Um booleano indicando se é o fim de uma palavra.

```javascript
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}
```

---

### Passo 2: Criando a Classe `Trie`

A classe `Trie` irá conter os seguintes métodos:
- `insert(word)`: Insere uma palavra na Trie.
- `search(word)`: Verifica se uma palavra está presente.
- `startsWith(prefix)`: Verifica se existe alguma palavra que comece com um determinado prefixo.

```javascript
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
```

---

## Testando a Trie

```javascript
// Criando uma Trie
const t = new Trie();

// Inserindo palavras
t.insert("cachorro");
t.insert("casamento");
t.insert("casaco");
t.insert("carro");

// Testando busca de palavras
console.log(t.search("cachorro")); // true
console.log(t.search("cachoro")); // false
console.log(t.startsWith("cas")); // true
console.log(t.startsWith("car")); // true
console.log(t.startsWith("caminho")); // false
```




## Conclusão

A Trie é uma estrutura poderosa para manipulação de strings e pode ser utilizada em várias aplicações como busca preditiva, correção ortográfica e compressão de dados. A implementação apresentada fornece uma base sólida para futuros aprimoramentos, como armazenar contagens de palavras e remover palavras da Trie.