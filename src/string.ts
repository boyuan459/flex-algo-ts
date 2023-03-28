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
