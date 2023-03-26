type MapBoolean = {
  [key: string]: boolean;
};

type MatrixValueType = string | number;

const DIRECTIONS = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

class Matrix {
  private _matrix: MatrixValueType[][];

  constructor(matrix: [][]) {
    this._matrix = matrix;
  }

  sequence(): MatrixValueType[] {
    const values: MatrixValueType[] = [];
    for (let i = 0; i < this._matrix.length; i++) {
      for (let j = 0; j < this._matrix[0].length; j++) {
        values.push(this._matrix[i][j]);
      }
    }
    return values;
  }

  private _dfs(row: number, col: number, values: MatrixValueType[], seen: MapBoolean) {
    if (
      row < 0 ||
      row >= this._matrix.length ||
      col < 0 ||
      col >= this._matrix[0].length ||
      seen[`${row}${col}`]
    ) {
      return;
    }
    values.push(this._matrix[row][col]);
    seen[`${row}${col}`] = true;
    for (let i = 0; i < DIRECTIONS.length; i++) {
      const newRow = row + DIRECTIONS[i][0];
      const newCol = col + DIRECTIONS[i][1];
      this._dfs(newRow, newCol, values, seen);
    }
  }

  dfs(): MatrixValueType[] {
    const values: MatrixValueType[] = [];
    const seen: MapBoolean = {};
    this._dfs(0, 0, values, seen);
    return values;
  }

  bfs(): MatrixValueType[] {
    const values: MatrixValueType[] = [];
    const seen: MapBoolean = {};
    const queue = [[0, 0]];
    while (queue.length > 0) {
      const current = queue.shift();
      if (current === undefined) {
        continue;
      }
      const row = current[0];
      const col = current[1];
      if (
        row < 0 ||
        row >= this._matrix.length ||
        col < 0 ||
        col >= this._matrix[0].length ||
        seen[`${row}${col}`]
      ) {
        continue;
      }
      values.push(this._matrix[row][col]);
      seen[`${row}${col}`] = true;
      for (let i = 0; i < DIRECTIONS.length; i++) {
        const newRow = row + DIRECTIONS[i][0];
        const newCol = col + DIRECTIONS[i][1];
        queue.push([newRow, newCol]);
      }
    }
    return values;
  }

  matrix(): MatrixValueType[][] {
    return this._matrix;
  }

  numIslands(): number {
    let count = 0;
    for (let i = 0; i < this._matrix.length; i++) {
      for (let j = 0; j < this._matrix[0].length; j++) {
        if (this._matrix[i][j] === '1') {
          count += 1;
          const queue = [];
          queue.push([i, j]);
          while (queue.length > 0) {
            const current = queue.shift();
            if (current === undefined) {
              continue;
            }
            const row: number = current[0];
            const col: number = current[1];
            if (
              row < 0 ||
              row >= this._matrix.length ||
              col < 0 ||
              col >= this._matrix[0].length ||
              this._matrix[row][col] === '0'
            ) {
              continue;
            }
            this._matrix[row][col] = '0';
            for (let i = 0; i < DIRECTIONS.length; i++) {
              const newRow = DIRECTIONS[i][0] + row;
              const newCol = DIRECTIONS[i][1] + col;
              queue.push([newRow, newCol]);
            }
          }
        }
      }
    }
    return count;
  }
}

export { Matrix, MatrixValueType };
