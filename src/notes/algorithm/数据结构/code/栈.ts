class Stack {
  #value = []

  push(val: any) {
    return this.#value.push(val)
  }
  pop() {
    return this.#value.pop()
  }
  peek() {
    return this.#value[this.#value.length - 1]
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

function dec2bin(number: number) {
  const stack = new Stack()
  while (number > 0) {
    stack.push(number % 2)
    number = Math.floor(number / 2)
  }

  let bin = ''
  while (!stack.isEmpty()) {
    bin += stack.pop()
  }
  return bin
}
