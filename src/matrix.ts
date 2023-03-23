class Matrix {
  private _matrix: [][];

  constructor(matrix: [][]) {
    this._matrix = matrix;
  }

  sequence(): any[] {
    const values: any[] = [];
    for (let i = 0; i < this._matrix.length; i++) {
      for (let j = 0; j < this._matrix[0].length; j++) {
        values.push(this._matrix[i][j]);
      }
    }
    return values;
  }
}

export { Matrix };
