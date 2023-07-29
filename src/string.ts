type MapChar = {
  [key: string]: number
}

export function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) {
    return 0
  }
  let p1 = 0
  const map: MapChar = {}
  let max = 0
  for (let p2 = 0; p2 < s.length; p2++) {
    const char = s[p2]
    if (map[char] >= p1) {
      p1 = map[char] + 1
    }
    map[char] = p2
    const length = p2 - p1 + 1
    max = Math.max(max, length)
  }
  return max
}

export function lengthOfLongestSubstringTwoDistinct(s: string): number {
  if (s.length <= 1) {
    return s.length
  }
  let max = 0
  let p1 = 0
  const seen: MapChar = {}

  for (let p2 = 0; p2 < s.length; p2++) {
    const ch = s[p2]
    // if already has two distinct characters in seen, remove the char with smallest position
    const chars = Object.keys(seen)
    if (chars.length === 2 && seen[ch] === undefined) {
      let smallestChar = ''
      let smallest = p2
      chars.forEach((key) => {
        if (seen[key] < smallest) {
          smallestChar = key
          smallest = seen[key]
        }
      })
      delete seen[smallestChar]
      p1 = seen[Object.keys(seen)[0]]
    }

    // update seen char with position if current char is different with previous char
    if (p2 === 0 || ch !== s[p2 - 1]) {
      seen[ch] = p2
    }

    max = Math.max(max, p2 - p1 + 1)
  }

  return max
}

export function backspaceCompare(source: string, target: string): boolean {
  let p1 = source.length - 1
  let p2 = target.length - 1
  while (p1 >= 0 && p2 >= 0) {
    if (source[p1] === '#') {
      // backspace
      let backtrace = 2
      while (backtrace > 0) {
        p1 -= 1
        backtrace -= 1
        if (source[p1] === '#') {
          backtrace += 2
        }
      }
    }
    if (target[p2] === '#') {
      // backspace
      let backtrace = 2
      while (backtrace > 0) {
        p2 -= 1
        backtrace -= 1
        if (source[p2] === '#') {
          backtrace += 2
        }
      }
    }
    if (source[p1] !== target[p2]) {
      return false
    }
    p1 -= 1
    p2 -= 1
  }
  return p1 === p2
}

export function strip(str: string): string {
  return str.replace(/\d+|\s+|[\?,:]+/g, '').toLowerCase()
}

export function isPalindrome(str: string): boolean {
  const s = strip(str)
  let p1 = 0
  let p2 = s.length - 1
  while (p1 < p2) {
    if (s[p1] !== s[p2]) {
      return false
    }
    p1 += 1
    p2 -= 1
  }
  return true
}

function _isPalindrome(str: string, start: number, end: number): boolean {
  let p1 = start
  let p2 = end
  while (p1 < p2) {
    if (str[p1] !== str[p2]) {
      return false
    }
    p1 += 1
    p2 -= 1
  }
  return true
}

export function isSubPalindrome(str: string): boolean {
  const s = strip(str)
  let p1 = 0
  let p2 = s.length - 1
  while (p1 < p2) {
    if (s[p1] !== s[p2]) {
      if (_isPalindrome(s, p1 + 1, p2) || _isPalindrome(s, p1, p2 - 1)) {
        return true
      } else {
        return false
      }
    }
    p1 += 1
    p2 -= 1
  }
  return true
}

const ALPHABET_SIZE = 26

const ALPHABET_TABLE: Record<string, number> = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
}

export function hash(str: string): string {
  const arr = new Array(ALPHABET_SIZE).fill(0)
  for (let i = 0; i < str.length; i++) {
    arr[ALPHABET_TABLE[str[i]]] += 1
  }
  return arr.join('#')
}

export function groupAnagrams(strs: string[]): {
  map: Record<string, string[]>
  anagrams: string[][]
} {
  const anagrams: Record<string, string[]> = {}
  for (let i = 0; i < strs.length; i++) {
    const hashStr = hash(strs[i])
    if (anagrams[hashStr]) {
      anagrams[hashStr].push(strs[i])
    } else {
      anagrams[hashStr] = [strs[i]]
    }
  }

  return {
    map: anagrams,
    anagrams: Object.values(anagrams),
  }
}

export function multiply(num1: string, num2: string) {
  const nums = new Array(num1.length + num2.length).fill(0)

  for (let i = 0; i < num2.length; i++) {
    let carry = 0
    const bottomIndex = num2.length - 1 - i
    for (let j = 0; j < num1.length; j++) {
      const topIndex = num1.length - 1 - j
      const offset = i + j
      const result = parseInt(num2[bottomIndex]) * parseInt(num1[topIndex]) + nums[offset] + carry
      carry = Math.trunc(result / 10)
      nums[offset] = result % 10
    }
    nums[i + num1.length] += carry
  }

  const result = []
  // remove leading 0
  let leading = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] !== 0 && leading === 1) {
      result.push(nums[i])
      leading = 0
    } else if (leading === 0) {
      result.push(nums[i])
    }
  }

  return result.join('')
}
