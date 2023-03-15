import { binarySearch } from '../binarySearch';

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
});
