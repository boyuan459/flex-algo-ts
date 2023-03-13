import { quickSort, pivot, quickSelectPivot, quickSelect } from '../quickSort';

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

  it('quickSelect should pivot', () => {
    const arr = [3, 2, 1, 5, 6, 4];
    const p = quickSelectPivot(arr, 0, arr.length - 1);
    expect(p).toEqual(3);
    expect(arr).toEqual([3, 2, 1, 4, 5, 6]);
  });

  it('quickSelect should return the kth largest element', () => {
    const arr = [3, 2, 1, 5, 6, 4];
    const val = quickSelect(arr, 2);
    expect(val).toEqual(5);

    const arr2 = [3, 2, 3, 1, 2, 4, 5, 5, 6];
    const val2 = quickSelect(arr2, 4);
    expect(val2).toEqual(4);
  });
});
