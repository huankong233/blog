/**
 * 判断是否为-0
 */
const isNegativeZero = (num: number) => num === 0 && 1 / num < 0

class Node {
  #value: any
  #next: Node | null
  #prev: Node | null

  constructor(value: any) {
    this.#value = value
    this.#next = null
    this.#prev = null
  }

  setValue(value: any) {
    this.#value = value
    return value
  }

  getValue() {
    return structuredClone(this.#value)
  }

  setNext(next: Node | null) {
    this.#next = next
    return next
  }

  getNext() {
    return this.#next
  }

  setPrev(prev: Node | null) {
    this.#prev = prev
    return prev
  }

  getPrev() {
    return this.#prev
  }
}

class DoublyLinkedList {
  #head: Node = null
  #tail: Node = null
  #length = 0

  #getNode(index: number) {
    const getNode = (index: number): Node => {
      if (!isNegativeZero(index) && index >= 0) {
        let current = this.#head
        for (let i = 0; i < index; i++) {
          current = current.getNext()
        }
        return current
      } else {
        let current = this.#tail
        for (let i = 0; i > index; i--) {
          current = current.getPrev()
        }
        return current
      }
    }

    if (isNegativeZero(index)) {
      return this.#tail
    } else if (index === 0) {
      return this.#head
    } else if (index === this.#length - 1) {
      return this.#tail
    } else if (index === -1 * (this.#length - 1)) {
      return this.#head
    }

    if (Math.abs(index) <= Math.floor(this.#length / 2)) {
      // 如果双向都小于长度的一半就直接访问
      return getNode(index)
    } else if (Math.abs(index) < this.#length) {
      // 小于链表长度否则就是超出范围了
      return getNode(index > 0 ? (this.#length - 1 - index) * -1 : this.#length - 1 + index)
    } else {
      throw new RangeError(`Index ${index} is out of bounds!`)
    }
  }

  append(value: any) {
    const newNode = new Node(value)

    if (!this.#head) {
      this.#head = newNode
      this.#tail = newNode
    } else {
      newNode.setPrev(this.#tail)
      this.#tail.setNext(newNode)
      this.#tail = newNode
    }

    this.#length++

    return value
  }

  insert(index: number, value: any) {
    const newNode = new Node(value)

    if (this.#length === 0) {
      if (index !== 0) {
        throw new RangeError(`Index ${index} is out of bounds!`)
      }
      this.#head = newNode
      this.#tail = newNode
    } else {
      if (index === 0) {
        this.#head.setPrev(newNode)
        newNode.setNext(this.#head)
        this.#head = newNode
      } else if (index === this.#length) {
        this.#tail.setNext(newNode)
        newNode.setPrev(this.#tail)
        this.#tail = newNode
      } else {
        const prev = this.#getNode(index - 1)
        const next = prev.getNext()
        prev.setNext(newNode)
        next.setPrev(newNode)
        newNode.setNext(next)
        newNode.setPrev(prev)
      }
    }

    this.#length++

    return value
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
    current.setValue(value)
    return value
  }

  remove(value: any) {
    let index = this.indexOf(value)
    if (index === -1) return false
    return this.removeAt(index)
  }

  removeAt(index: number) {
    let value = this.#head

    if (this.#length === 1) {
      if (index !== 0) {
        throw new RangeError(`Index ${index} is out of bounds!`)
      }
      this.#head = null
      this.#tail = null
    } else {
      if (index === 0) {
        this.#head = this.#head.getNext()
      } else if (index === this.#length - 1) {
        const prev = this.#getNode(index - 1)
        value = prev.getNext().getValue()
        prev.setNext(null)
        this.#tail = prev
      } else {
        const prev = this.#getNode(index - 1)
        value = prev.getNext().getValue()
        const next = prev.getNext().getNext()
        prev.setNext(next)
        next.setPrev(prev)
      }
    }

    this.#length--

    return value
  }

  isEmpty() {
    return this.#length === 0
  }

  size() {
    return this.#length
  }

  toString(direction: '->' | '<-' = '->') {
    let result = []
    let current = direction === '->' ? this.#head : this.#tail

    while (current) {
      result.push(current.getValue())
      current = direction === '->' ? current.getNext() : current.getPrev()
    }

    return result.join(` ${direction} `)
  }
}

const list = new DoublyLinkedList()
list.append(1)
list.append(10)
list.append(6)
list.append(5)
list.append(7)
list.append(4)
list.insert(2, 0)
console.log(list.toString('->'))
console.log(list.toString('<-'))
console.log(list.removeAt(list.size() - 1))
console.log(list.toString('->'))
console.log(list.toString('<-'))
console.log(list.get(0))
console.log(list.get(-0))
