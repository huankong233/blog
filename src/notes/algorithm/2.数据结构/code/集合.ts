/* eslint-disable unused-imports/no-unused-vars */
class TsSet {
  #values: Record<string, any> = {}

  add(value: any): boolean {
    if (this.has(value)) {
      return false
    }
    this.#values[value] = value
    return true
  }

  remove(value: any): boolean {
    if (!this.has(value)) {
      return false
    }
    delete this.#values[value]
    return true
  }

  has(value: any) {
    return this.#values[value] !== undefined
  }

  clear() {
    this.#values = {}
    return true
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

  union(otherSet: TsSet) {
    const unionSet = new TsSet()

    for (const value of this.values()) {
      unionSet.add(value)
    }

    for (const value of otherSet.values()) {
      unionSet.add(value)
    }

    return unionSet
  }

  intersection(otherSet: TsSet) {
    const intersectionSet = new TsSet()

    for (const value of otherSet.values()) {
      if (this.has(value)) {
        intersectionSet.add(value)
      }
    }

    return intersectionSet
  }

  difference(otherSet: TsSet) {
    const differenceSet = new TsSet()

    for (const value of otherSet.values()) {
      if (!this.has(value)) {
        differenceSet.add(value)
      }
    }

    return differenceSet
  }

  subSet(otherSet: TsSet) {
    // 方案1
    for (const value of otherSet.values()) {
      if (!this.has(value)) {
        return false
      }
    }

    return true

    // 方案2
    // let count = 0
    // for (const value of otherSet.values()) {
    //   if (this.has(value)) count++
    // }
    // return count === otherSet.size()
  }
}
