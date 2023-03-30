import {
  lengthOfLongestSubstring,
  backspaceCompare,
  strip,
  isPalindrome,
  isSubPalindrome,
} from '../string';

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

  it('strip should return the value', () => {
    const str = strip('A man, a plan, a canal: Panama');
    expect(str).toEqual('amanaplanacanalpanama');
  });

  it('isPalindrome should return true', () => {
    const palindrome = isPalindrome('A man, a plan, a canal: Panama');
    expect(palindrome).toBe(true);
  });

  it('isPalindrome should return false', () => {
    const palindrome = isPalindrome('race a car');
    expect(palindrome).toBe(false);
  });

  it('isPalindrome should return false', () => {
    const palindrome = isPalindrome(' ');
    expect(palindrome).toBe(true);
  });

  it('isSubPalindrome should return true', () => {
    const palindrome = isSubPalindrome('aba');
    const palindrome2 = isSubPalindrome('abca');
    expect(palindrome).toBe(true);
    expect(palindrome2).toBe(true);
  });

  it('isSubPalindrome should return false', () => {
    const palindrome = isSubPalindrome('abc');
    expect(palindrome).toBe(false);
  });
});
