import { twoSum, maxArea } from '../array';

describe('array test', () => {
  it('twoSum should return the indexies', () => {
    const indexies = twoSum([2, 7, 11, 15], 9);
    const indexies2 = twoSum([3, 2, 4], 6);
    const indexies3 = twoSum([3, 3], 6);
    expect(indexies).toEqual([0, 1]);
    expect(indexies2).toEqual([1, 2]);
    expect(indexies3).toEqual([0, 1]);
  });

  it('maxArea should return the value', () => {
    const area = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
    const area2 = maxArea([1, 1]);
    expect(area).toBe(49);
    expect(area2).toBe(1);
  });
});
