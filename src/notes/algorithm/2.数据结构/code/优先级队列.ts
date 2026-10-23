/* eslint-disable unused-imports/no-unused-vars */
class ProiorityQueueElement {
  #value: any
  #priority: number

  constructor(value: any, priority: number) {
    this.#value = value
    this.#priority = priority
  }

  getValue() {
    return this.#value
  }

  getPriority() {
    return this.#priority
  }
}

class ProiorityQueue {
  #value: ProiorityQueueElement[] = []

  enqueue(value: any, priority: number) {
    const newElement = new ProiorityQueueElement(value, priority)

    if (this.#value.length !== 0) {
      for (let i = 0; i < this.#value.length; i++) {
        if (this.#value[i].getPriority() > newElement.getPriority()) {
          this.#value.splice(i, 0, newElement)
          return newElement
        }
      }
    }

    this.#value.push(newElement)

    return newElement
  }

  dequeue() {
    return this.#value.shift()
  }

  front() {
    return this.#value[0]
  }

  isEmpty() {
    return this.#value.length === 0
  }

  size() {
    return this.#value.length
  }

  toString() {
    return JSON.stringify(this.#value)
  }
}
