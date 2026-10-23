/* eslint-disable unused-imports/no-unused-vars */
class LinkedListNode {
  #value: any
  #next: LinkedListNode | null

  constructor(value: any) {
    this.#value = value
    this.#next = null
  }

  setValue(value: any): true {
    this.#value = value
    return true
  }

  getValue() {
    return this.#value
  }

  setNext(next: LinkedListNode | null = null): true {
    this.#next = next
    return true
  }

  getNext() {
    return this.#next
  }
}

class LinkedList {
  #head: LinkedListNode | null = null
  #length = 0

  #getNode(index: number) {
    // 越界判断
    if (index < 0 || index >= this.#length) {
      throw new RangeError(`Index ${index} is out of bounds!`)
    }

    let current: LinkedListNode | null = this.#head
    for (let i = 0; i < index; i++) {
      if (current === null) {
        return current
      }

      current = current.getNext()
    }

    return current
  }

  append(value: any): boolean {
    const newNode = new LinkedListNode(value)

    if (this.#length === 0) {
      this.#head = newNode
    }
    else {
      const current = this.#getNode(this.#length - 1)
      if (current === null) {
        return false
      }

      current.setNext(newNode)
    }

    this.#length++

    return true
  }

  insert(index: number, value: any): boolean {
    const newNode = new LinkedListNode(value)

    if (index === 0) {
      newNode.setNext(this.#head)
      this.#head = newNode
    }
    else {
      const prev = this.#getNode(index - 1)
      if (prev === null) {
        return false
      }

      const next = prev.getNext()
      prev.setNext(newNode)
      newNode.setNext(next)
    }

    this.#length++

    return true
  }

  get(index: number): [true, any] | [false, null] {
    const node = this.#getNode(index)
    if (node === null) {
      return [false, null]
    }

    return [true, node.getValue()]
  }

  indexOf(value: any): number {
    let current: LinkedListNode | null = this.#head

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

  update(index: number, value: any): boolean {
    const node = this.#getNode(index)
    if (node === null) {
      return false
    }

    node.setValue(value)
    return true
  }

  remove(value: any): boolean {
    const index = this.indexOf(value)
    if (index === -1) {
      return false
    }

    return this.removeAt(index)
  }

  removeAt(index: number): boolean {
    if (index === 0) {
      const head = this.#head
      if (head === null) {
        return false
      }

      this.#head = head.getNext()
    }
    else {
      const prev = this.#getNode(index - 1)
      if (prev === null) {
        return false
      }

      const next = prev.getNext()
      if (next === null) {
        return false
      }

      prev.setNext(next.getNext())
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

  toString() {
    const result: any[] = []
    let current: LinkedListNode | null = this.#head

    while (current) {
      result.push(current.getValue())
      current = current.getNext()
    }

    return result.join(' -> ')
  }
}
