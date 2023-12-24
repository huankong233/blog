class BinarySearchTreeNode {
  #key: number
  #left: BinarySearchTreeNode
  #right: BinarySearchTreeNode

  constructor(key: number) {
    this.#key = key
    this.#left = null
    this.#right = null
  }

  getKey() {
    return this.#key
  }

  setKey(key: number) {
    return (this.#key = key)
  }

  getLeft() {
    return this.#left
  }

  setLeft(left: BinarySearchTreeNode) {
    return (this.#left = left)
  }

  getRight() {
    return this.#right
  }

  setRight(right: BinarySearchTreeNode) {
    return (this.#right = right)
  }
}

class BinarySearchTree {
  #root: BinarySearchTreeNode

  constructor() {
    this.#root = null
  }

  insert(key: number) {
    const newNode = new BinarySearchTreeNode(key)

    if (this.#root === null) {
      this.#root = newNode
    } else {
      this.#insertNode(this.#root, newNode)
    }
  }

  #insertNode(node: BinarySearchTreeNode, newNode: BinarySearchTreeNode) {
    if (newNode.getKey() > node.getKey()) {
      if (node.getRight() === null) {
        node.setRight(newNode)
      } else {
        this.#insertNode(node.getRight(), newNode)
      }
    } else {
      if (node.getLeft() === null) {
        node.setLeft(newNode)
      } else {
        this.#insertNode(node.getLeft(), newNode)
      }
    }
  }

  // 先序遍历
  prevOrderTraversal() {
    const result = []
    this.#prevOrderTraversalNode(this.#root, result)
    return result
  }

  #prevOrderTraversalNode(node: BinarySearchTreeNode, result: number[]) {
    if (node === null) return
    result.push(node.getKey())
    this.#prevOrderTraversalNode(node.getLeft(), result)
    this.#prevOrderTraversalNode(node.getRight(), result)
  }

  // 中序遍历
  inOrderTraversal() {
    const result = []
    this.#inOrderTraversalNode(this.#root, result)
    return result
  }

  #inOrderTraversalNode(node: BinarySearchTreeNode, result: number[]) {
    if (node === null) return
    this.#inOrderTraversalNode(node.getLeft(), result)
    result.push(node.getKey())
    this.#inOrderTraversalNode(node.getRight(), result)
  }

  // 后序遍历
  postOrderTraversal() {
    const result = []
    this.#postOrderTraversalNode(this.#root, result)
    return result
  }

  #postOrderTraversalNode(node: BinarySearchTreeNode, result: number[]) {
    if (node === null) return
    this.#postOrderTraversalNode(node.getLeft(), result)
    this.#postOrderTraversalNode(node.getRight(), result)
    result.push(node.getKey())
  }

  min() {
    let node = this.#root
    let left = node.getLeft()
    while (left !== null) {
      node = left
      left = node.getLeft()
    }
    return node.getKey()
  }

  max() {
    let node = this.#root
    let right = node.getRight()
    while (right !== null) {
      node = right
      right = node.getRight()
    }
    return node.getKey()
  }

  search(key: number) {
    return this.#searchNode(this.#root, key)
  }

  #searchNode(node: BinarySearchTreeNode, key: number) {
    if (node === null) return false

    if (key < node.getKey()) {
      return this.#searchNode(node.getLeft(), key)
    } else if (key > node.getKey()) {
      return this.#searchNode(node.getRight(), key)
    } else {
      return node
    }
  }

  search2(key: number) {
    let node = this.#root
    let nowKey = null

    while (node !== null) {
      nowKey = node.getKey()
      if (key < nowKey) {
        node = node.getLeft()
      } else if (key > nowKey) {
        node = node.getRight()
      } else {
        return node
      }
    }

    return false
  }

  remove(key: number) {
    const rootKey = this.#root.getKey()
    let current = this.#root
    let parent: BinarySearchTreeNode = null
    let isLeftChild = true

    let currentKey = current.getKey()
    while (currentKey !== key) {
      parent = current
      if (key < currentKey) {
        isLeftChild = true
        current = current.getLeft()
      } else {
        isLeftChild = false
        current = current.getRight()
      }

      if (current === null) return false
    }

    // 如果没有字节点
    if (current.getLeft() === null && current.getRight() === null) {
      if (currentKey === rootKey) {
        this.#root = null
      } else if (isLeftChild) {
        parent.setLeft(null)
      } else {
        parent.setRight(null)
      }
    } else if (current.getLeft() === null) {
      if (current.getKey() === rootKey) {
        this.#root = current.getRight()
      } else if (isLeftChild) {
        parent.setLeft(current.getRight())
      } else {
        parent.setRight(current.getRight())
      }
    } else if (current.getRight() === null) {
      if (current.getKey() === rootKey) {
        this.#root = current.getLeft()
      } else if (isLeftChild) {
        parent.setLeft(current.getLeft())
      } else {
        parent.setRight(current.getLeft())
      }
    } else {
      let successor = this.getSuccessor(current)

      if (currentKey === rootKey) {
        this.#root = successor
      } else if (isLeftChild) {
        parent.setLeft(successor)
      } else {
        parent.setRight(successor)
      }

      successor.setLeft(current.getLeft())
    }
    return true
  }

  getSuccessor(node: BinarySearchTreeNode) {
    let successor = node
    let current = node.getRight()
    let successorParent = node

    while (current !== null) {
      successorParent = successor
      successor = current
      current = current.getLeft()
    }

    if (successor !== node.getRight()) {
      successorParent.setLeft(successor.getRight())
      successor.setRight(node.getRight())
    }
    return successor
  }
}

const bst = new BinarySearchTree()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)

console.log(bst.prevOrderTraversal())
console.log(bst.inOrderTraversal())
console.log(bst.max())
