import { DoublyLinkedList } from './双向链表.js'

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

    oldStorage.forEach(bucket => {
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

    if (index === -1) {
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
      if (index === -1) return null
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
      if (index === -1) return null
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
