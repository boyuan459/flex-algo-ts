import { PriorityQueue, CompareFunc } from './priorityQueue';

class Dijkstra {
  private _adjList: number[][][];
  private _nodes: number;
  private _comparator: CompareFunc;
  private _distances: number[];

  constructor() {
    this._adjList = [[[]]];
    this._nodes = 0;
    this._comparator = () => true;
    this._distances = [];
  }

  create(times: number[][], numNodes: number) {
    this._nodes = numNodes;
    this._adjList = new Array(numNodes).fill(0).map(() => []);
    this._distances = new Array(numNodes).fill(Infinity);
    this._comparator = (i, j) => this._distances[i] < this._distances[j];
    for (let i = 0; i < times.length; i++) {
      const time = times[i];
      const source = time[0];
      const target = time[1];
      const weight = time[2];
      this._adjList[source].push([target, weight]);
    }
  }

  shortestPath(k: number): number {
    const queue = new PriorityQueue(this._comparator);
    queue.push(k);
    this._distances[k] = 0;
    while (!queue.isEmpty()) {
      const vertex = queue.pop();
      if (vertex !== undefined) {
        const neighbors = this._adjList[vertex];
        for (let i = 0; i < neighbors.length; i++) {
          const neighbor = neighbors[i];
          const target = neighbor[0];
          const weight = neighbor[1];
          if (this._distances[vertex] + weight < this._distances[target]) {
            this._distances[target] = this._distances[vertex] + weight;
            queue.push(target);
          }
        }
      }
    }
    const max = Math.max(...this._distances);
    return max === Infinity ? -1 : max;
  }
}

export { Dijkstra };
