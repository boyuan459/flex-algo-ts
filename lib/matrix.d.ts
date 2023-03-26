type MatrixValueType = string | number;
declare class Matrix {
    private _matrix;
    constructor(matrix: MatrixValueType[][]);
    sequence(): MatrixValueType[];
    private _dfs;
    dfs(): MatrixValueType[];
    bfs(): MatrixValueType[];
    matrix(): MatrixValueType[][];
    numIslands(): number;
    orangesRotting(): number;
}
export { Matrix, MatrixValueType };
