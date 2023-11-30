class Node {
  #value: any
  #next: Node | null

  constructor(value: any, next: Node | null = null) {
    this.#value = value
    this.#next = next
  }

  setValue(value: any) {
    return (this.#value = value)
  }

  getValue() {
    return structuredClone(this.#value)
  }

  setNext(next: Node | null = null) {
    return (this.#next = next)
  }

  getNext() {
    return this.#next
  }
}

class LinkedList {
  #head: Node = null
  #length = 0

  #getNode(index: number) {
    // 越界判断
    if (index < 0 || index >= this.#length) {
      throw new RangeError(`Index ${index} is out of bounds!`)
    }

    let current = this.#head
    for (let i = 0; i < index; i++) {
      current = current.getNext()
    }

    return current
  }

  append(value: any) {
    const newNode = new Node(value)

    if (!this.#head) {
      this.#head = newNode
    } else {
      const current = this.#getNode(this.#length - 1)
      current.setNext(newNode)
    }

    this.#length++

    return true
  }

  insert(index: number, value: any) {
    const newNode = new Node(value)

    if (index === 0) {
      newNode.setNext(this.#head)
      this.#head = newNode
    } else {
      const prev = this.#getNode(index - 1)
      const next = prev.getNext()
      prev.setNext(newNode)
      newNode.setNext(next)
    }

    this.#length++

    return true
  }

  get(index: number) {
    return this.#getNode(index).getValue()
  }

  indexOf(value: any) {
    let current = this.#head

    for (let i = 0; i < this.#length; i++) {
      if (current.getValue() === value) return i
      current = current.getNext()
    }

    return -1
  }

  update(index: number, value: any) {
    const current = this.#getNode(index)
    return current.setValue(value)
  }

  remove(value: any) {
    let index = this.indexOf(value)
    if (index === -1) return false
    return this.removeAt(index)
  }

  removeAt(index: number) {
    if (index === 0) {
      if (this.#length >= 1) {
        this.#head = this.#head.getNext()
      } else {
        throw new RangeError(`Index ${index} is out of bounds!`)
      }
    } else {
      const prev = this.#getNode(index - 1)
      prev.setNext(prev.getNext().getNext())
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
    let result = []
    let current = this.#head

    while (current) {
      result.push(current.getValue())
      current = current.getNext()
    }

    return result.join(' -> ')
  }
}

const list = new LinkedList()
// list.append(1)
// list.append(2)
// list.append('123')
// list.append('abc')
// list.insert(1, 0)
// console.log(list.toString())
// console.log(list.indexOf('123'))
// console.log(list.update(1, '1234'))
// console.log(list.toString())
console.log(list.removeAt(1))
console.log(list.toString())
