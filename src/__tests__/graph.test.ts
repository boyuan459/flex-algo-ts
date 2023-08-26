import { Graph } from '../graph'

describe('Graph test', () => {
  it('test create graph', () => {
    const vectors = [
      [0, 1],
      [0, 2],
      [0, 3],
      [2, 4],
      [4, 5],
      [4, 6],
    ]
    const graph = new Graph()
    graph.create(vectors, 7)
    const adjList = graph.adjacentList()
    expect(adjList).toEqual([[1, 2, 3], [], [4], [], [5, 6], [], []])
  })

  it('test dfs', () => {
    const vectors = [
      [0, 1],
      [0, 2],
      [0, 3],
      [2, 4],
      [4, 5],
      [4, 6],
    ]
    const graph = new Graph()
    graph.create(vectors, 7)
    const values = graph.dfs(0)
    expect(values).toEqual([0, 1, 2, 4, 5, 6, 3])
  })

  it('test bfs', () => {
    const vectors = [
      [0, 1],
      [0, 2],
      [0, 3],
      [2, 4],
      [4, 5],
      [4, 6],
    ]
    const graph = new Graph()
    graph.create(vectors, 7)
    const values = graph.bfs(0)
    expect(values).toEqual([0, 1, 2, 3, 4, 5, 6])
  })

  it('test bfs 2', () => {
    const vectors = [
      [0, 1],
      [0, 2],
      [0, 3],
      [2, 4],
      [4, 5],
      [4, 6],
      [4, 7],
      [5, 8],
      [6, 9],
    ]
    const graph = new Graph()
    graph.create(vectors, 10)
    const values = graph.bfs(0)
    expect(values).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('test inform time', () => {
    const manager = [2, 2, -1, 2, 2, 2]
    const graph = new Graph()
    graph.createInformTimeGraph(manager, 6)
    const time = graph.informTime(2, [0, 0, 1, 0, 0, 0])
    expect(time).toEqual(1)
  })

  it('test inform time 2', () => {
    const manager = [3, 3, 3, -1, 1, 0, 0, 2, 2, 2]
    const informTime = [1, 4, 3, 1, 0, 0, 0, 0, 0, 0]
    const graph = new Graph()
    graph.createInformTimeGraph(manager, 10)
    const time = graph.informTime(3, informTime)
    expect(time).toEqual(5)
  })

  it('test isAcyclic should return true', () => {
    const graph = new Graph()
    graph.createCourseGraph([[1, 0]], 2)
    const isAcyclic = graph.isAcyclic()
    expect(isAcyclic).toEqual(true)
  })

  it('test isAcyclic should return false', () => {
    const graph = new Graph()
    graph.createCourseGraph(
      [
        [1, 0],
        [0, 1],
      ],
      2,
    )
    const isAcyclic = graph.isAcyclic()
    expect(isAcyclic).toBe(false)
  })

  it('test bipartition should return true', () => {
    const graph = new Graph()
    graph.create(
      [
        [1, 3],
        [1, 4],
        [2, 4],
      ],
      4,
    )
    expect(graph.bipartition()).toEqual(true)
  })

  it('test bipartition should return false', () => {
    const graph = new Graph()
    graph.create(
      [
        [1, 2],
        [1, 3],
        [2, 3],
      ],
      3,
    )
    expect(graph.bipartition()).toEqual(false)
  })

  it('test courseScheduleOrdering should return ordering', () => {
    const graph = new Graph()
    graph.createCourseGraph(
      [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
      ],
      4,
    )
    const orders = graph.courseScheduleOrdering()
    expect(orders).toEqual([0, 1, 2, 3])
  })

  it('test courseScheduleOrdering should return ordering', () => {
    const graph = new Graph()
    graph.createCourseGraph(
      [
        [1, 0],
        [2, 0],
        [3, 2],
        [4, 2],
      ],
      5,
    )
    const orders = graph.courseScheduleOrdering()
    expect(orders).toEqual([0, 1, 2, 3, 4])
  })
})
