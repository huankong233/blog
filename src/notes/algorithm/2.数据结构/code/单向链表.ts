namespace 单向链表 {
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
    #head: Node
    #length = 0

    #getNode(index: number) {
      // 越界判断
      if (index < 0 || index >= this.#length) {
        throw new RangeError(`Index ${index} is out of bounds!`)
      }

      let current: Node | null = this.#head
      for (let i = 0; i < index; i++) {
        if (current === null) return current
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
        if (current === null) return current
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
        if (prev === null) return prev
        const next = prev.getNext()
        prev.setNext(newNode)
        newNode.setNext(next)
      }

      this.#length++

      return true
    }

    get(index: number) {
      return this.#getNode(index)?.getValue()
    }

    indexOf(value: any) {
      let current: Node | null = this.#head

      for (let i = 0; i < this.#length; i++) {
        if (current === null) return current
        if (current.getValue() === value) return i
        current = current.getNext()
      }

      return -1
    }

    update(index: number, value: any) {
      return this.#getNode(index)?.setValue(value)
    }

    remove(value: any) {
      let index = this.indexOf(value)
      if (index === -1 || index === null) return false
      return this.removeAt(index)
    }

    removeAt(index: number) {
      if (index === 0) {
        if (this.#length >= 1) {
          const next = this.#head.getNext()
          if (next === null) return next
          this.#head = next
        } else {
          throw new RangeError(`Index ${index} is out of bounds!`)
        }
      } else {
        const prev = this.#getNode(index - 1)
        if (prev === null) return prev
        prev.setNext(prev.getNext()?.getNext())
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
      let result: any[] = []
      let current: Node | null = this.#head

      while (current) {
        result.push(current.getValue())
        current = current.getNext()
      }

      return result.join(' -> ')
    }
  }
}

