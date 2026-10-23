export class DoublyLinkedListNode<T> {
  #value: T
  #next: DoublyLinkedListNode<T> | null
  #prev: DoublyLinkedListNode<T> | null

  constructor(value: T) {
    this.#value = value
    this.#next = null
    this.#prev = null
  }

  setValue(value: T) {
    this.#value = value
    return value
  }

  getValue() {
    return this.#value
  }

  setNext(next: DoublyLinkedListNode<T> | null) {
    this.#next = next
    return next
  }

  getNext() {
    return this.#next
  }

  setPrev(prev: DoublyLinkedListNode<T> | null) {
    this.#prev = prev
    return prev
  }

  getPrev() {
    return this.#prev
  }
}

export class DoublyLinkedList<T = any> {
  #head: DoublyLinkedListNode<T> | null = null
  #tail: DoublyLinkedListNode<T> | null = null
  #length = 0

  isNegativeZero(num: number) {
    return num === 0 && 1 / num < 0
  }

  isReverseOrder(index: number) {
    return this.isNegativeZero(index) || index < 0
  }

  #getNode(index: number): DoublyLinkedListNode<T> | null {
    if (!Number.isInteger(index) || Math.abs(index) >= this.#length) {
      return null
    }

    if (this.isNegativeZero(index) || index === this.#length - 1) {
      return this.#tail
    }
    else if (index === 0 || index === -1 * (this.#length - 1)) {
      return this.#head
    }

    if (!this.isReverseOrder(index)) {
      let current: DoublyLinkedListNode<T> | null = this.#head
      for (let i = 0; i < index; i++) {
        if (current === null) {
          return current
        }
        current = current.getNext()
      }
      return current
    }
    else {
      let current: DoublyLinkedListNode<T> | null = this.#tail
      for (let i = 0; i > index; i--) {
        if (current === null) {
          return current
        }
        current = current.getPrev()
      }
      return current
    }
  }

  append(value: T): boolean {
    const newNode = new DoublyLinkedListNode(value)

    if (this.#length === 0) {
      this.#head = newNode
      this.#tail = newNode
    }
    else {
      if (this.#tail === null) {
        return false
      }

      newNode.setPrev(this.#tail)
      this.#tail.setNext(newNode)
      this.#tail = newNode
    }

    this.#length++

    return true
  }

  insert(index: number, value: T): boolean {
    if (!Number.isInteger(index) || Math.abs(index) > this.#length) {
      return false
    }

    const newNode = new DoublyLinkedListNode(value)

    if (this.#length === 0) {
      if (index !== 0 && !this.isNegativeZero(index)) {
        return false
      }

      this.#head = newNode
      this.#tail = newNode
    }
    else if (this.isNegativeZero(index)) {
      if (this.#tail === null) {
        return false
      }

      this.#tail.setNext(newNode)
      newNode.setPrev(this.#tail)
      this.#tail = newNode
    }
    else if (index === 0) {
      if (this.#head === null) {
        return false
      }

      this.#head.setPrev(newNode)
      newNode.setNext(this.#head)
      this.#head = newNode
    }
    else if (this.isReverseOrder(index)) {
      // 获取index的上一个节点, 也就是向右移动1, 所以是 +1
      const prev = this.#getNode((index + 1) === 0 ? -0 : index + 1)
      if (prev === null) {
        return false
      }

      // 因为需要插入到prev的前面, 所以需要获取到prev的再上一个节点
      const next = prev.getPrev()
      if (next) {
        next.setNext(newNode)
      }

      prev.setPrev(newNode)
      newNode.setPrev(next)
      newNode.setNext(prev)

      if (Math.abs(index) === this.#length) {
        this.#head = newNode
      }
    }
    else {
      // 正序插入
      const prev = this.#getNode(index - 1)
      if (prev === null) {
        return false
      }

      const next = prev.getNext()
      if (next) {
        next.setPrev(newNode)
      }

      prev.setNext(newNode)
      newNode.setNext(next)
      newNode.setPrev(prev)

      if (index === this.#length) {
        this.#tail = newNode
      }
    }

    this.#length++

    return true
  }

  get(index: number): [true, T] | [false, null] {
    const node = this.#getNode(index)
    if (node === null) {
      return [false, null]
    }

    return [true, node.getValue()]
  }

  indexOf(value: T): number {
    let current: DoublyLinkedListNode<T> | null = this.#head

    for (let i = 0; i < this.#length; i++) {
      if (current === null) {
        return -1
      }
      if (current.getValue() === value) {
        return i
      }

      current = current.getNext()
    }

    return -1
  }

  update(index: number, value: T): boolean {
    const current = this.#getNode(index)
    if (current === null) {
      return false
    }

    current.setValue(value)
    return true
  }

  remove(value: T): boolean {
    const index = this.indexOf(value)
    if (index === -1)
      return false

    return this.removeAt(index)
  }

  removeAt(index: number): boolean {
    if (!Number.isInteger(index) || Math.abs(index) >= this.#length) {
      return false
    }

    if (this.isNegativeZero(index)) {
      const tail = this.#tail
      if (tail === null) {
        return false
      }

      if (this.#length === 1) {
        this.#head = null
        this.#tail = null
      }
      else {
        this.#tail = tail.getPrev()
        this.#tail?.setNext(null)
      }
    }
    else if (index === 0) {
      const head = this.#head
      if (head === null) {
        return false
      }

      if (this.#length === 1) {
        this.#head = null
        this.#tail = null
      }
      else {
        this.#head = head.getNext()
        this.#head?.setPrev(null)
      }
    }
    else if (this.isReverseOrder(index)) {
      const next = this.#getNode((index + 1) === 0 ? -0 : index + 1)
      if (next === null) {
        return false
      }

      const prev = next.getPrev()?.getPrev() ?? null
      // 因为删除的时候可能正好只有两个元素 -0 和 -1, 所以prev可能为null, 但是next不可能为null
      if (prev) {
        prev.setNext(next)
      }

      next.setPrev(prev)

      if (Math.abs(index) === this.#length - 1) {
        this.#head = next
      }
    }
    else {
      const prev = this.#getNode(index - 1)
      if (prev === null) {
        return false
      }

      const next = prev.getNext()?.getNext() ?? null
      if (next) {
        next.setPrev(prev)
      }

      prev.setNext(next)

      if (index === this.#length - 1) {
        this.#tail = prev
      }
    }

    this.#length--

    return true
  }

  isEmpty() {
    return this.#length === 0
  }

  size() {
    return this.#length
  }

  toString(direction: '->' | '<-' = '->') {
    const result: T[] = []
    let current = direction === '->' ? this.#head : this.#tail

    while (current) {
      result.push(current.getValue())
      current = direction === '->' ? current.getNext() : current.getPrev()
    }

    return result.join(` ${direction} `)
  }
}
