declare class Dijkstra {
    private _adjList;
    private _nodes;
    private _comparator;
    private _distances;
    constructor();
    create(times: number[][], numNodes: number): void;
    get adjacentList(): number[][][];
    shortestPath(k: number): number;
    get distances(): number[];
}
export { Dijkstra };
