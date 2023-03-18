import { Graph } from '../graph';

describe('Graph test', () => {
  it('test create graph', () => {
    const vectors = [
      [0, 1],
      [0, 2],
      [0, 3],
      [2, 4],
      [4, 5],
      [4, 6],
    ];
    const graph = new Graph();
    graph.create(vectors, 7);
    const adjList = graph.adjacentList();
    expect(adjList).toEqual([[1, 2, 3], [], [4], [], [5, 6], [], []]);
  });

  it('test dfs', () => {
    const vectors = [
      [0, 1],
      [0, 2],
      [0, 3],
      [2, 4],
      [4, 5],
      [4, 6],
    ];
    const graph = new Graph();
    graph.create(vectors, 7);
    const values = graph.dfs(0);
    expect(values).toEqual([0, 1, 2, 4, 5, 6, 3]);
  });

  it('test bfs', () => {
    const vectors = [
      [0, 1],
      [0, 2],
      [0, 3],
      [2, 4],
      [4, 5],
      [4, 6],
    ];
    const graph = new Graph();
    graph.create(vectors, 7);
    const values = graph.bfs(0);
    expect(values).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });
});
