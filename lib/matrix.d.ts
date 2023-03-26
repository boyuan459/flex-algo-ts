type MatrixValueType = string | number;
declare class Matrix {
    private _matrix;
    constructor(matrix: [][]);
    sequence(): MatrixValueType[];
    private _dfs;
    dfs(): MatrixValueType[];
    bfs(): MatrixValueType[];
    matrix(): MatrixValueType[][];
    numIslands(): number;
}
export { Matrix, MatrixValueType };
