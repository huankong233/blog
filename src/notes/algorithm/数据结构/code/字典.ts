namespace 字典 {
  class Dictionay {
    #values: { [key: string]: any } = {}

    has(key: string) {
      return this.#values.hasOwnProperty(key)
    }

    set(key: string, value: any) {
      this.#values[key] = value
    }

    remove(key: string) {
      if (!this.has(key)) return false
      delete this.#values[key]
    }

    get(key: string) {
      return this.has(key) ? this.#values[key] : undefined
    }

    keys() {
      return Object.keys(this.#values)
    }

    values() {
      return Object.values(this.#values)
    }

    size() {
      return this.keys().length
    }

    clear() {
      this.#values = {}
    }
  }
}
