class element {
  value: any
  priority: number
  constructor(value: any, priority: number) {
    this.value = value
    this.priority = priority
  }
}

class proiorityQueue {
  #value: element[] = []

  enqueue(value: any, priority: number) {
    const newElement = new element(value, priority)

    if (this.#value.length !== 0) {
      for (let i = 0; i < this.#value.length; i++) {
        if (this.#value[i].priority > newElement.priority) {
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
