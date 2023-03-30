type MapChar = {
  [key: string]: number;
};

export function lengthOfLongestSubstring(s: string) {
  if (s.length === 0) {
    return 0;
  }
  let p1 = 0;
  const map: MapChar = {};
  let max = 0;
  for (let p2 = 0; p2 < s.length; p2++) {
    const char = s[p2];
    if (map[char] >= p1) {
      p1 = map[char] + 1;
    }
    map[char] = p2;
    const length = p2 - p1 + 1;
    max = Math.max(max, length);
  }
  return max;
}

export function backspaceCompare(source: string, target: string): boolean {
  let p1 = source.length - 1;
  let p2 = target.length - 1;
  while (p1 >= 0 && p2 >= 0) {
    if (source[p1] === '#') {
      // backspace
      let backtrace = 2;
      while (backtrace > 0) {
        p1 -= 1;
        backtrace -= 1;
        if (source[p1] === '#') {
          backtrace += 2;
        }
      }
    }
    if (target[p2] === '#') {
      // backspace
      let backtrace = 2;
      while (backtrace > 0) {
        p2 -= 1;
        backtrace -= 1;
        if (source[p2] === '#') {
          backtrace += 2;
        }
      }
    }
    if (source[p1] !== target[p2]) {
      return false;
    }
    p1 -= 1;
    p2 -= 1;
  }
  return p1 === p2;
}

export function strip(str: string): string {
  return str.replace(/\d+|\s+|[\?,:]+/g, '').toLowerCase();
}

export function isPalindrome(str: string): boolean {
  const s = strip(str);
  let p1 = 0;
  let p2 = s.length - 1;
  while (p1 < p2) {
    if (s[p1] !== s[p2]) {
      return false;
    }
    p1 += 1;
    p2 -= 1;
  }
  return true;
}
