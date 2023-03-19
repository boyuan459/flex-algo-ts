declare class Graph {
    _adjList: number[][];
    constructor();
    create(vectors: number[][], nodes: number): void;
    createInformTimeGraph(manager: number[], nodes: number): void;
    _dfsInformTime(vertex: number, informTime: number[]): number;
    informTime(headID: number, informTime: number[]): number;
    adjacentList(): number[][];
    _dfs(vertex: number, values: number[], seen: boolean[]): void;
    dfs(vertex: number): number[];
    bfs(vertex: number): number[];
}
export { Graph };
