import { Dijkstra } from '../dijkstra';

describe('Dijkstra test', () => {
  it('shortestPath should return valid value', () => {
    const n = 4;
    const graph = new Dijkstra();
    graph.create(
      [
        [2 - 1, 1 - 1, 1],
        [2 - 1, 3 - 1, 1],
        [3 - 1, 4 - 1, 1],
      ],
      n,
    );
    const value = graph.shortestPath(2 - 1);
    expect(value).toEqual(2);
    expect(graph.distances).toEqual([1, 0, 1, 2]);
  });

  it('shortestPath should return the value for single path', () => {
    const n = 2;
    const k = 1;
    const graph = new Dijkstra();
    graph.create([[1 - 1, 2 - 1, 1]], n);
    const value = graph.shortestPath(k - 1);
    expect(value).toEqual(1);
  });

  it('shortestPath should return -1 if no shortest path', () => {
    const n = 2;
    const k = 2;
    const graph = new Dijkstra();
    graph.create([[1 - 1, 2 - 1, 1]], n);
    const value = graph.shortestPath(k - 1);
    expect(value).toEqual(-1);
  });
});
