import { quickSort, pivot } from '../quickSort';

describe('quickSort', () => {
  it('quickSort should sort array', () => {
    const arr = [3, 1, 5, 0, 2, 4, 6];
    quickSort(arr);
    expect(arr).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });

  it('quickSort should pivot', () => {
    const arr = [3, 1, 5, 0, 2, 4, 6];
    const p = pivot(arr, 0, arr.length - 1);
    expect(p).toEqual(3);
    expect(arr).toEqual([1, 0, 2, 3, 5, 4, 6]);
  });
});
