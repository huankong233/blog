namespace 队列结构 {
  class Queue {
    #value: any[] = []

    enqueue(element: any) {
      return this.#value.push(element)
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
      return this.#value.toString()
    }
  }

  function passGame(nameList: string[], num = 5) {
    const queue = new Queue()

    for (let name of nameList) {
      queue.enqueue(name)
    }

    while (queue.size() > 1) {
      for (let i = 0; i < num - 1; i++) {
        queue.enqueue(queue.dequeue())
      }

      queue.dequeue()
    }

    return queue
  }
}
