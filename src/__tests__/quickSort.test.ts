import { quickSort } from '../quickSort';

describe('quickSort', () => {
  it('quickSort should sort array', () => {
    const arr = [3, 1, 5, 0, 2, 4, 6];
    quickSort(arr);
    expect(arr).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });
});
