/* eslint-disable unused-imports/no-unused-vars */
import { DoublyLinkedList } from './双向链表.js'

class HashTable {
  #storage: DoublyLinkedList<[string, any]>[] = [] // 数组存储元素
  #length = 0 // 当前存放了多少个元素
  #limit = 9 // 总个数
  #constant = 37 // 常量
  #minPrecent = 0.25 // 最小百分比
  #maxPrecent = 0.75 // 最大百分比

  constructor(limit = 9, minPrecent = 0.25, maxPrecent = 0.75) {
    this.#limit = limit
    this.#minPrecent = minPrecent
    this.#maxPrecent = maxPrecent
  }

  #hashFunc(value: string): number {
    let hashCode = 0

    for (let i = 0; i < value.length; i++) {
      hashCode = this.#constant * hashCode + value.charCodeAt(i)
    }

    return hashCode % this.#limit
  }

  #indexOfName(list: DoublyLinkedList<[string, any]>, key: string): number {
    const size = list.size()

    for (let i = 0; i < size; i++) {
      const [success, value] = list.get(i)
      if (!success || value[0] !== key) {
        continue
      }

      return i
    }

    return -1
  }

  // 保证哈希表的长度是质数
  #getPrime(num: number): number {
    if (num <= 2) {
      return 2
    }

    let isPrime = true
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false
        break
      }
    }

    if (isPrime) {
      return num
    }

    return this.#getPrime(num + 1)
  }

  #resize(newLimit: number): boolean {
    const oldStorage = this.#storage

    this.#limit = this.#getPrime(newLimit)
    this.#storage = []
    this.#length = 0

    oldStorage.forEach((bucket) => {
      const size = bucket.size()

      for (let i = 0; i < size; i++) {
        const [success, value] = bucket.get(i)
        if (!success) {
          continue
        }

        this.put(value[0], value[1])
      }
    })

    return true
  }

  put(key: string, value: any): boolean {
    const hashCode = this.#hashFunc(key)

    let bucket = this.#storage[hashCode]
    if (!bucket) {
      bucket = new DoublyLinkedList()
      this.#storage[hashCode] = bucket
    }

    const index = this.#indexOfName(bucket, key)

    if (index === -1) {
      if (this.#length > this.#limit * this.#maxPrecent) {
        this.#resize(this.#limit * 2)
      }

      bucket.append([key, value])
      this.#length++
    }
    else {
      bucket.update(index, [key, value])
    }

    return true
  }

  get(key: string): [true, any] | [false, null] {
    const hashCode = this.#hashFunc(key)

    const bucket = this.#storage[hashCode]
    if (!bucket) {
      return [false, null]
    }

    const size = bucket.size()
    if (size === 0) {
      return [false, null]
    }

    const index = this.#indexOfName(bucket, key)
    if (index === -1) {
      return [false, null]
    }

    const [success, value] = bucket.get(index)
    if (!success) {
      return [false, null]
    }

    return [true, value[1]]
  }

  remove(key: string): boolean {
    const hashCode = this.#hashFunc(key)

    const bucket = this.#storage[hashCode]
    if (!bucket) {
      return false
    }

    const size = bucket.size()
    if (size === 0) {
      return false
    }

    const index = this.#indexOfName(bucket, key)
    if (index === -1) {
      return false
    }

    const success = bucket.removeAt(index)
    if (!success) {
      return false
    }

    this.#length--

    if (
      this.#limit > 9
      && this.#length < this.#limit * this.#minPrecent
    ) {
      this.#resize(Math.floor(this.#limit / 2))
    }

    return true
  }

  isEmpty() {
    return this.#length === 0
  }

  size() {
    return this.#length
  }
}
