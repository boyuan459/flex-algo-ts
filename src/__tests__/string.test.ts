import { lengthOfLongestSubstring } from '../string';

describe('string test', () => {
  it('lengthOfLongestSubstring should return the value', () => {
    const length = lengthOfLongestSubstring('abcabcbb');
    const length2 = lengthOfLongestSubstring('bbbbb');
    const length3 = lengthOfLongestSubstring('pwwkew');
    expect(length).toBe(3);
    expect(length2).toBe(1);
    expect(length3).toBe(3);
  });
});
