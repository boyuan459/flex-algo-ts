class Graph {
  private _adjList: number[][]
  private _indegrees: number[]
  private _nodes: number

  constructor() {
    this._adjList = []
    this._indegrees = []
    this._nodes = 0
  }

  create(vectors: number[][], nodes: number) {
    this._nodes = nodes
    this._adjList = new Array(nodes).fill(0).map(() => [])
    for (let i = 0; i < vectors.length; i++) {
      const vector = vectors[i]
      const source = vector[0]
      const target = vector[1]
      this._adjList[source].push(target)
    }
  }

  createInformTimeGraph(manager: number[], nodes: number) {
    this._adjList = new Array(nodes).fill(0).map(() => [])
    for (let i = 0; i < manager.length; i++) {
      if (manager[i] !== -1) {
        this._adjList[manager[i]].push(i)
      }
    }
  }

  createCourseGraph(courses: number[][], numCourses: number) {
    this._nodes = numCourses
    this._adjList = new Array(numCourses).fill(0).map(() => [])
    this._indegrees = new Array(numCourses).fill(0)
    for (let i = 0; i < courses.length; i++) {
      const vector = courses[i]
      const target = vector[0]
      const source = vector[1]
      this._adjList[source].push(target)
      this._indegrees[target] += 1
    }
  }

  private _dfsInformTime(vertex: number, informTime: number[]): number {
    const neighbors = this._adjList[vertex]
    if (neighbors.length === 0) {
      return informTime[vertex]
    }
    let max = 0
    for (let i = 0; i < neighbors.length; i++) {
      max = Math.max(max, this._dfsInformTime(neighbors[i], informTime))
    }
    return max + informTime[vertex]
  }

  informTime(headID: number, informTime: number[]): number {
    return this._dfsInformTime(headID, informTime)
  }

  adjacentList() {
    return this._adjList
  }

  private _dfs(vertex: number, values: number[], seen: boolean[]) {
    if (seen[vertex]) {
      return
    }
    seen[vertex] = true
    values.push(vertex)
    const neighbors = this._adjList[vertex]
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i]
      this._dfs(neighbor, values, seen)
    }
  }

  dfs(vertex: number): number[] {
    const values: number[] = []
    const seen: boolean[] = []
    this._dfs(vertex, values, seen)
    return values
  }

  bfs(vertex: number): number[] {
    const values: number[] = []
    const seen: boolean[] = []
    const queue: number[] = []

    queue.push(vertex)
    while (queue.length > 0) {
      const current = queue.shift()
      if (current === undefined) {
        break
      }
      if (seen[current]) {
        continue
      }
      values.push(current)
      seen[current] = true
      const neighbors = this._adjList[current]
      for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i]
        queue.push(neighbor)
      }
    }

    return values
  }

  isAcyclic(): boolean {
    const queue = []
    for (let i = 0; i < this._indegrees.length; i++) {
      if (this._indegrees[i] === 0) {
        queue.push(i)
      }
    }
    let count = 0
    while (queue.length > 0) {
      const vertex = queue.shift()
      count += 1
      if (vertex === undefined) {
        continue
      }
      const neighbors = this._adjList[vertex]
      for (let i = 0; i < neighbors.length; i++) {
        const neighbor: number = neighbors[i]
        this._indegrees[neighbor] -= 1
        if (this._indegrees[neighbor] === 0) {
          queue.push(neighbor)
        }
      }
    }
    return count === this._nodes
  }

  indegrees() {
    return this._indegrees
  }

  bipartition(): boolean {
    const group = new Array(this._nodes + 1).fill(0)

    for (let i = 1; i <= this._nodes; i++) {
      if (group[i] === 0) {
        group[i] = 1

        const queue = [i]
        while (queue.length) {
          const node = queue.shift() as number
          for (let j = 0; j < this._adjList[node]?.length; j++) {
            const neighbor = this._adjList[node][j]
            if (group[node] === group[neighbor]) {
              return false
            }
            if (group[neighbor] === 0) {
              group[neighbor] = -1 * group[node]
              queue.push(neighbor)
            }
          }
        }
      }
    }
    return true
  }

  courseScheduleOrdering(): number[] {
    const queue = []
    const orders: number[] = []

    for (let i = 0; i < this._indegrees.length; i++) {
      if (this._indegrees[i] === 0) {
        queue.push(i)
      }
    }

    while (queue.length) {
      const node = queue.shift() as number
      orders.push(node)
      for (let i = 0; i < this._adjList[node].length; i++) {
        const neighbor = this._adjList[node][i]
        this._indegrees[neighbor] -= 1
        if (this._indegrees[neighbor] === 0) {
          queue.push(neighbor)
        }
      }
    }

    return orders.length === this._nodes ? orders : []
  }
}

export { Graph }
