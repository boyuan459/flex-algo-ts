import { lengthOfLongestSubstring, backspaceCompare } from '../string';

describe('string test', () => {
  it('lengthOfLongestSubstring should return the value', () => {
    const length = lengthOfLongestSubstring('abcabcbb');
    const length2 = lengthOfLongestSubstring('bbbbb');
    const length3 = lengthOfLongestSubstring('pwwkew');
    expect(length).toBe(3);
    expect(length2).toBe(1);
    expect(length3).toBe(3);
  });

  it('backspaceCompare should return the value', () => {
    const equal = backspaceCompare('ab#c', 'ad#c');
    const equal2 = backspaceCompare('ab##', 'c#d#');
    const equal3 = backspaceCompare('a#c', 'b');
    expect(equal).toBe(true);
    expect(equal2).toBe(true);
    expect(equal3).toBe(false);
  });
});
