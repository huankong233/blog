namespace 图 {
  class Dictionay<T> {
    #values: { [key: string]: T } = {}

    has(key: string) {
      return this.#values.hasOwnProperty(key)
    }

    set(key: string, value: T) {
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

  class Queue<T> {
    #value: T[] = []

    enqueue(element: T) {
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

  interface color {
    [key: string]: 'white' | 'gray' | 'black'
  }

  type func = (value: string) => void

  class Graph {
    // 顶点
    #vertexes: string[] = []
    #edges: Dictionay<string[]> = new Dictionay()

    constructor() {}

    addVertex(vertex: string) {
      if (this.#vertexes.includes(vertex)) return
      this.#vertexes.push(vertex)
      this.#edges.set(vertex, [])
    }

    addEdge(vertex1: string, vertex2: string) {
      if (!this.#edges.has(vertex1) || !this.#edges.has(vertex2)) return
      this.#edges.get(vertex1)!.push(vertex2)
      this.#edges.get(vertex2)!.push(vertex1)
    }

    toString() {
      return this.#vertexes
        .map((vertex) => `${vertex} => ${this.#edges.get(vertex)?.join(' ')}`)
        .join('\n')
    }

    initColor(): color {
      /**
       * @description 白色: 没有被访问过
       * @description 灰色: 被访问过, 但没有完成探索
       * @description 黑色: 被访问过, 并且探索完成
       */
      return this.#vertexes.reduce((previousValue, currentValue) => {
        previousValue[currentValue] = 'white'
        return previousValue
      }, {})
    }

    // 广度优先搜索算法
    BFS(initVertexes: string, func: func) {
      const queue = new Queue<string>()
      const color = this.initColor()

      queue.enqueue(initVertexes)
      while (!queue.isEmpty()) {
        // 取出顶点
        const currentVertex = queue.dequeue() as string

        // 获取相连的其余顶点
        const edges = this.#edges.get(currentVertex) as string[]

        // 设置为灰色
        color[initVertexes] = 'gray'

        // 遍历所有边, 添加到队列中
        edges.forEach((edge) => {
          // 如果是白色, 则设置为灰色, 并添加到队列中
          // 如果是灰色, 则跳过, 因为已经被访问过了
          if (color[edge] === 'white') {
            color[edge] = 'gray'
            queue.enqueue(edge)
          }
        })

        func(currentVertex)

        color[initVertexes] = 'black'
      }
    }

    // 深度优先搜索算法(队列方法)
    DFSQueue(initVertexes: string, func: func) {
      const queue = new Queue<string>()
      const color = this.initColor()

      queue.enqueue(initVertexes)
      while (!queue.isEmpty()) {
        // 取出顶点
        const currentVertex = queue.dequeue() as string

        // 获取相连的其余顶点
        const edges = this.#edges.get(currentVertex) as string[]

        // 设置为灰色
        color[initVertexes] = 'gray'

        // 遍历所有边, 添加到队列中
        edges.forEach((edge) => {
          // 如果是白色, 则设置为灰色, 并添加到队列中
          if (color[edge] === 'white') {
            color[edge] = 'gray'
            queue.enqueue(edge)
          }
        })

        func(currentVertex)

        color[initVertexes] = 'black'
      }
    }

    // 深度优先搜索算法(递归方法)
    DFS(initVertexes: string, func: func) {
      const color = this.initColor()
      this.DFSVisit(initVertexes, color, func)
    }

    DFSVisit(vertexes: string, color: color, func: func) {
      color[vertexes] = 'gray'

      // 获取相连的其余顶点
      const edges = this.#edges.get(vertexes) as string[]

      // 设置为灰色
      color[vertexes] = 'gray'

      func(vertexes)

      // 遍历所有边
      edges.forEach((edge) => {
        // 如果是白色, 则设置为灰色, 并开始递归调用
        if (color[edge] === 'white') {
          color[edge] = 'gray'
          this.DFSVisit(edge, color, func)
        }
      })

      color[vertexes] = 'black'
    }
  }
}
