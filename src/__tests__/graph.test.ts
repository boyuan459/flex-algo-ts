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
    ];
    const graph = new Graph();
    graph.create(vectors, 10);
    const values = graph.bfs(0);
    expect(values).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('test inform time', () => {
    const manager = [2, 2, -1, 2, 2, 2];
    const graph = new Graph();
    graph.createInformTimeGraph(manager, 6);
    const time = graph.informTime(2, [0, 0, 1, 0, 0, 0]);
    expect(time).toEqual(1);
  });

  it('test inform time 2', () => {
    const manager = [3, 3, 3, -1, 1, 0, 0, 2, 2, 2];
    const informTime = [1, 4, 3, 1, 0, 0, 0, 0, 0, 0];
    const graph = new Graph();
    graph.createInformTimeGraph(manager, 10);
    const time = graph.informTime(3, informTime);
    expect(time).toEqual(5);
  });
});
