namespace 哈希表 {
  /**
   * 判断是否为-0
   */
  const isNegativeZero = (num: number) => num === 0 && 1 / num < 0

  export class Node {
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

  export class DoublyLinkedList {
    #head: Node | null = null
    #tail: Node | null = null
    #length = 0

    #getNode(index: number) {
      const getNode = (index: number) => {
        if (!isNegativeZero(index) && index >= 0) {
          let current: Node | null = this.#head
          for (let i = 0; i < index; i++) {
            if (current === null) return current
            current = current.getNext()
          }
          return current
        } else {
          let current: Node | null = this.#tail
          for (let i = 0; i > index; i--) {
            if (current === null) return current
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

      if (this.#head !== null) {
        this.#head = newNode
        this.#tail = newNode
      } else {
        newNode.setPrev(this.#tail)
        if (this.#tail === null) return this.#tail
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
          if (this.#head === null) return this.#head
          this.#head.setPrev(newNode)
          newNode.setNext(this.#head)
          this.#head = newNode
        } else if (index === this.#length) {
          if (this.#tail === null) return this.#tail
          this.#tail.setNext(newNode)
          newNode.setPrev(this.#tail)
          this.#tail = newNode
        } else {
          const prev = this.#getNode(index - 1)
          if (prev === null) return prev
          const next = prev.getNext()
          if (next === null) return next
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

    indexOfName(name: any) {
      let current: Node | null = this.#head

      for (let i = 0; i < this.#length; i++) {
        if (current === null) return current
        if (current.getValue()[0] === name) return i
        current = current.getNext()
      }

      return -1
    }

    update(index: number, value: any) {
      const current = this.#getNode(index)
      if (current === null) return current
      current.setValue(value)
      return value
    }

    remove(value: any) {
      let index = this.indexOf(value)
      if (index === null) return index
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
          if (this.#head === null) return this.#head
          this.#head = this.#head.getNext()
        } else if (index === this.#length - 1) {
          const prev = this.#getNode(index - 1)
          if (prev === null) return prev
          value = prev.getNext()?.getValue()
          prev.setNext(null)
          this.#tail = prev
        } else {
          const prev = this.#getNode(index - 1)
          if (prev === null) return prev
          value = prev.getNext()?.getValue()
          const next = prev.getNext()?.getNext()
          if (!prev) return prev
          if (!next) return next
          prev.setNext(next)
          next.setPrev(prev)
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
      let result: any[] = []
      let current = direction === '->' ? this.#head : this.#tail

      while (current) {
        result.push(current.getValue())
        current = direction === '->' ? current.getNext() : current.getPrev()
      }

      return result.join(` ${direction} `)
    }
  }

  class HashTable {
    #storage: DoublyLinkedList[] = [] // 数组存储元素
    #count = 0 // 当前存放了多少个元素
    #limit = 8 // 总个数

    #hashFunc(value: string, max: number) {
      let hashCode = 0

      for (let i = 0; i < value.length; i++) {
        hashCode = 31 * hashCode + value.charCodeAt(i)
      }

      hashCode = hashCode % max

      return hashCode
    }

    #resize(newLimit: number) {
      const oldStorage = this.#storage

      this.#limit = newLimit
      this.#storage = []
      this.#count = 0

      oldStorage.forEach((bucket) => {
        let size = bucket.size()
        while (size > 0) {
          size--
          const data = bucket.get(size)
          this.put(data[0], data[1])
        }
      })
    }

    #isPrime(num: number) {
      const temp = Math.ceil(Math.sqrt(num))

      for (let i = 2; i < temp; i++) {
        if (num % i === 0) return false
      }

      return true
    }

    #getPrime(num: number) {
      while (!this.#isPrime(num)) {
        num++
      }

      return num
    }

    put(key: string, value: any) {
      const hashCode = this.#hashFunc(key, this.#limit)

      let bucket = this.#storage[hashCode]
      if (!bucket) {
        bucket = new DoublyLinkedList()
        this.#storage[hashCode] = bucket
      }

      const index = bucket.indexOfName(key)

      if (index === -1 || !index) {
        if (this.#count > this.#limit * 0.75) this.#resize(this.#getPrime(this.#limit * 2))
        bucket.append([key, value])
        this.#count++
      } else {
        bucket.update(index, [key, value])
      }

      return [key, value]
    }

    get(key: string) {
      const hashCode = this.#hashFunc(key, this.#limit)
      const bucket = this.#storage[hashCode]
      if (!bucket) return null
      const size = bucket.size()
      if (size === 0) {
        return null
      } else {
        const index = bucket.indexOfName(key)
        if (index === -1 || !index) return null
        return bucket.get(index)[1]
      }
    }

    remove(key: string) {
      const hashCode = this.#hashFunc(key, this.#limit)
      const bucket = this.#storage[hashCode]
      if (!bucket) return false
      const size = bucket.size()
      if (size === 0) {
        return false
      } else {
        const index = bucket.indexOfName(key)
        if (index === -1 || !index) return null
        this.#count--
        if (this.#limit > 9 && this.#count < this.#limit * 0.25) {
          this.#resize(this.#getPrime(Math.floor(this.#limit / 2)))
        }

        return bucket.removeAt(index)
      }
    }

    isEmpty() {
      return this.#count === 0
    }
  }

  const hashTable = new HashTable()
  hashTable.put('name', 'huankong')
  hashTable.put('age', 114514)
  hashTable.put('height', 1919810)
  hashTable.put('age', 20)
  console.log(hashTable.get('name'))
  console.log(hashTable.remove('age'))
  console.log(hashTable.get('age'))
}
