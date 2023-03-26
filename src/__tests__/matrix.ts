import { Matrix } from '../matrix';

describe('Matrix test', () => {
  it('sequential traversal should return the values', () => {
    const grid = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const matrix = new Matrix(grid as [][]);
    const values = matrix.sequence();
    expect(values).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
  });

  it('dfs traversal should return the values', () => {
    const grid = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const matrix = new Matrix(grid as [][]);
    const values = matrix.dfs();
    expect(values).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 11, 7, 6, 10, 14, 13, 9, 5]);
  });

  it('bfs traversal should return the values', () => {
    const grid = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const matrix = new Matrix(grid as [][]);
    const values = matrix.bfs();
    expect(values).toEqual([1, 2, 5, 3, 6, 9, 4, 7, 10, 13, 8, 11, 14, 12, 15, 16]);
  });

  it('num of islands should return the value', () => {
    const grid = [
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0'],
    ];
    const matrix = new Matrix(grid as [][]);
    const numOfIslands = matrix.numIslands();
    expect(numOfIslands).toEqual(1);
  });

  it('num of islands should return the value', () => {
    const grid = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ];
    const matrix = new Matrix(grid as [][]);
    const numOfIslands = matrix.numIslands();
    expect(numOfIslands).toEqual(3);
  });

  it('oranges rotting should return the value', () => {
    const grid = [
      [2, 1, 1],
      [1, 1, 0],
      [0, 1, 1],
    ];
    const matrix = new Matrix(grid);
    const minutes = matrix.orangesRotting();
    expect(minutes).toEqual(4);
  });

  it('oranges rotting should return the value', () => {
    const grid = [
      [2, 1, 1],
      [0, 1, 1],
      [1, 0, 1],
    ];
    const matrix = new Matrix(grid);
    const minutes = matrix.orangesRotting();
    expect(minutes).toEqual(-1);
  });
});
