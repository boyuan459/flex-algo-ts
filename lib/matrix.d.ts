type MatrixValueType = string | number;
declare enum Orange {
    EMPTY = 0,
    FRESH = 1,
    ROT = 2
}
declare enum WallsAndGates {
    WALL = -1,
    GATE = 0,
    EMPTY = Infinity
}
declare class Matrix {
    private _matrix;
    constructor(matrix: MatrixValueType[][]);
    sequence(): MatrixValueType[];
    private _dfs;
    dfs(): MatrixValueType[];
    bfs(): MatrixValueType[];
    get matrix(): MatrixValueType[][];
    numIslands(): number;
    orangesRotting(): number;
    private _dfsWallsAndGates;
    wallsAndGates(): void;
}
export { Matrix, MatrixValueType, Orange, WallsAndGates };
