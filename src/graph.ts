class Graph {
  _adjList: number[][];

  constructor() {
    this._adjList = [];
  }

  create(vectors: number[][], nodes: number) {
    this._adjList = new Array(nodes).fill(0).map((list) => []);
    for (let i = 0; i < vectors.length; i++) {
      const vector = vectors[i];
      const source = vector[0];
      const target = vector[1];
      this._adjList[source].push(target);
    }
  }

  adjacentList() {
    return this._adjList;
  }

  _dfs(vertex: number, values: number[], seen: boolean[]) {
    if (seen[vertex]) {
      return;
    }
    seen[vertex] = true;
    values.push(vertex);
    const neighbors = this._adjList[vertex];
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      this._dfs(neighbor, values, seen);
    }
  }

  dfs(vertex: number): number[] {
    const values: number[] = [];
    const seen: boolean[] = [];
    this._dfs(vertex, values, seen);
    return values;
  }

  bfs(vertex: number): number[] {
    const values: number[] = [];
    const seen: boolean[] = [];
    const queue: number[] = [];

    queue.push(vertex);
    while (queue.length > 0) {
      const current = queue.shift();
      if (current === undefined) {
        break;
      }
      if (seen[current]) {
        continue;
      }
      values.push(current);
      seen[current] = true;
      const neighbors = this._adjList[current];
      for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i];
        queue.push(neighbor);
      }
    }

    return values;
  }
}

export { Graph };
