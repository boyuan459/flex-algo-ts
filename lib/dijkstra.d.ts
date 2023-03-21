declare class Dijkstra {
    private _adjList;
    private _nodes;
    private _comparator;
    private _distances;
    constructor();
    create(times: number[][], numNodes: number): void;
    shortestPath(k: number): number;
}
export { Dijkstra };
