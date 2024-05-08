namespace 二叉搜索树 {
  class BinarySearchTreeNode {
    #key: number
    #left: BinarySearchTreeNode | null
    #right: BinarySearchTreeNode | null

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

    setLeft(left: BinarySearchTreeNode | null) {
      return (this.#left = left)
    }

    getRight() {
      return this.#right
    }

    setRight(right: BinarySearchTreeNode | null) {
      return (this.#right = right)
    }
  }

  class BinarySearchTree {
    #root: BinarySearchTreeNode | null

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
        const right = node.getRight()
        if (right === null) {
          node.setRight(newNode)
        } else {
          this.#insertNode(right, newNode)
        }
      } else {
        const left = node.getLeft()
        if (left === null) {
          node.setLeft(newNode)
        } else {
          this.#insertNode(left, newNode)
        }
      }
    }

    // 先序遍历
    preOrderTraversal(handler: (node: BinarySearchTreeNode) => any) {
      this.#preOrderTraversalNode(this.#root, handler)
    }

    #preOrderTraversalNode(
      node: BinarySearchTreeNode | null,
      handler: (node: BinarySearchTreeNode) => any
    ) {
      if (node === null) return
      handler(node)
      this.#preOrderTraversalNode(node.getLeft(), handler)
      this.#preOrderTraversalNode(node.getRight(), handler)
    }

    // 中序遍历
    inOrderTraversal(handler: (node: BinarySearchTreeNode) => any) {
      this.#inOrderTraversalNode(this.#root, handler)
    }

    #inOrderTraversalNode(
      node: BinarySearchTreeNode | null,
      handler: (node: BinarySearchTreeNode) => any
    ) {
      if (node === null) return
      this.#inOrderTraversalNode(node.getLeft(), handler)
      handler(node)
      this.#inOrderTraversalNode(node.getRight(), handler)
    }

    // 后序遍历
    postOrderTraversal(handler: (node: BinarySearchTreeNode) => any) {
      this.#postOrderTraversalNode(this.#root, handler)
    }

    #postOrderTraversalNode(
      node: BinarySearchTreeNode | null,
      handler: (node: BinarySearchTreeNode) => any
    ) {
      if (node === null) return
      this.#postOrderTraversalNode(node.getLeft(), handler)
      this.#postOrderTraversalNode(node.getRight(), handler)
      handler(node)
    }

    min() {
      let node = this.#root
      if (node === null) return node
      let left = node.getLeft()
      while (left !== null) {
        node = left
        left = node.getLeft()
      }
      return node.getKey()
    }

    max() {
      let node = this.#root
      if (node === null) return node
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

    #searchNode(node: BinarySearchTreeNode | null, key: number) {
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
      let nowKey: number | null = null

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
      if (this.#root === null) return this.#root
      let current: BinarySearchTreeNode | null = this.#root
      const rootKey = this.#root.getKey()
      let parent: BinarySearchTreeNode | null = null
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

      if (current.getLeft() === null && current.getRight() === null) {
        // 如果没有子节点
        if (currentKey === rootKey) {
          this.#root = null
        } else if (isLeftChild) {
          if (parent === null) return parent
          parent.setLeft(null)
        } else {
          if (parent === null) return parent
          parent.setRight(null)
        }
      } else if (current.getLeft() === null) {
        // 如果没有左子节点
        if (current.getKey() === rootKey) {
          this.#root = current.getRight()
        } else if (isLeftChild) {
          if (parent === null) return parent
          parent.setLeft(current.getRight())
        } else {
          if (parent === null) return parent
          parent.setRight(current.getRight())
        }
      } else if (current.getRight() === null) {
        // 如果没有右子节点
        if (current.getKey() === rootKey) {
          this.#root = current.getLeft()
        } else if (isLeftChild) {
          if (parent === null) return parent
          parent.setLeft(current.getLeft())
        } else {
          if (parent === null) return parent
          parent.setRight(current.getLeft())
        }
      } else {
        // 如果有右还有右子节点
        let successor = this.getSuccessor(current)

        if (currentKey === rootKey) {
          this.#root = successor
        } else if (isLeftChild) {
          if (parent === null) return parent
          parent.setLeft(successor)
        } else {
          if (parent === null) return parent
          parent.setRight(successor)
        }

        if (successor === null) return successor

        successor.setLeft(current.getLeft())
      }
      return true
    }

    getSuccessor(delNode: BinarySearchTreeNode) {
      let successorParent: BinarySearchTreeNode | null = delNode
      let successor = delNode.getRight()
      let current = delNode.getRight()

      while (current !== null) {
        successorParent = successor
        successor = current
        current = current.getLeft()
      }

      if (successor !== delNode.getRight()) {
        if (successorParent === null || successor === null) return successor
        successorParent.setLeft(successor.getRight())
        successor.setRight(delNode.getRight())
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

  bst.preOrderTraversal((node) => {
    console.log(node.getKey())
  })

  console.log('')

  bst.inOrderTraversal((node) => {
    console.log(node.getKey())
  })

  console.log('')

  console.log(bst.max())
}
