declare class Graph {
    _adjList: number[][];
    constructor();
    create(vectors: number[][], nodes: number): void;
    adjacentList(): number[][];
    _dfs(vertex: number, values: number[], seen: boolean[]): void;
    dfs(vertex: number): number[];
    bfs(vertex: number): number[];
}
export { Graph };
