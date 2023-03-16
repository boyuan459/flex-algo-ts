import { binarySearch, searchRange } from '../binarySearch';

describe('Test Binary Search', () => {
  it('binarySearch should return the found target', () => {
    const values = [0, 1, 2, 3, 4, 5, 6];
    const index = binarySearch(values, 4);
    expect(index).toEqual(4);
  });

  it('binarySearch should return -1 if not found target', () => {
    const values = [0, 1, 2, 3, 4, 5, 6];
    const index = binarySearch(values, 8);
    expect(index).toEqual(-1);
  });

  it('searchRange should return the indexs if found target', () => {
    const values = [5, 7, 7, 8, 8, 10];
    const indexs = searchRange(values, 8);
    expect(indexs).toEqual([3, 4]);
  });

  it('searchRange should return [-1, -1] if not found target', () => {
    const values = [5, 7, 7, 8, 8, 10];
    const indexs = searchRange(values, 6);
    expect(indexs).toEqual([-1, -1]);
  });

  it('searchRange should return [-1, -1] for empty array', () => {
    const values: number[] = [];
    const indexs = searchRange(values, 0);
    expect(indexs).toEqual([-1, -1]);
  });
});
