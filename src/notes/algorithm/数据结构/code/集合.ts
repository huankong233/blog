namespace 集合 {
  class Set {
    #values: { [key: string]: any } = {}

    add(value: any) {
      if (this.has(value)) return false
      return (this.#values[value] = value)
    }

    remove(value: any) {
      if (!this.has(value)) return false
      return delete this.#values[value]
    }

    has(value: any) {
      return this.#values[value] !== undefined
    }

    clear() {
      return (this.#values = {})
    }

    size() {
      return Object.keys(this.#values).length
    }

    values() {
      return Object.values(this.#values)
    }

    toString() {
      return Object.values(this.#values).join(' , ')
    }

    union(otherSet: Set) {
      const unionSet = new Set()

      for (const value of this.values()) {
        unionSet.add(value)
      }

      for (const value of otherSet.values()) {
        unionSet.add(value)
      }

      return unionSet
    }

    intersection(otherSet: Set) {
      const intersectionSet = new Set()

      for (const value of otherSet.values()) {
        if (this.has(value)) intersectionSet.add(value)
      }

      return intersectionSet
    }

    difference(otherSet: Set) {
      const differenceSet = new Set()

      for (const value of otherSet.values()) {
        if (!this.has(value)) differenceSet.add(value)
      }

      return differenceSet
    }

    subSet(otherSet: Set) {
      // 方案2
      // let count = 0
      // for (const value of otherSet.values()) {
      //   if (this.has(value)) count++
      // }
      // return count === otherSet.size()

      // 方案1
      for (const value of otherSet.values()) {
        if (!this.has(value)) return false
      }

      return true
    }
  }
}
