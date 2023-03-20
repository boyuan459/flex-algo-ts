declare class Graph {
    private _adjList;
    private _indegrees;
    private _nodes;
    constructor();
    create(vectors: number[][], nodes: number): void;
    createInformTimeGraph(manager: number[], nodes: number): void;
    createCourseGraph(courses: number[][], numCourses: number): void;
    private _dfsInformTime;
    informTime(headID: number, informTime: number[]): number;
    adjacentList(): number[][];
    private _dfs;
    dfs(vertex: number): number[];
    bfs(vertex: number): number[];
    isAcyclic(): boolean;
    indegrees(): number[];
}
export { Graph };
