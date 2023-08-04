export type MapParenthesesType = {
  [key: string]: string
}

const MapParentheses: MapParenthesesType = {
  '(': ')',
  '{': '}',
  '[': ']',
}

export function minRemoveToMakeValid(s: string) {
  const chars = s.split('')
  const stack = []
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === '(') {
      stack.push(i)
    } else if (chars[i] === ')') {
      if (stack.length === 0) {
        chars[i] = ''
      } else {
        stack.pop()
      }
    }
  }
  for (let j = 0; j < stack.length; j++) {
    chars[stack[j]] = ''
  }
  return chars.join('')
}

export function isValidParentheses(s: string): boolean {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const parenthese = s[i]
    if (MapParentheses[parenthese] !== undefined) {
      stack.push(parenthese)
    } else {
      const left = stack.pop()
      if (left === undefined) {
        return false
      }
      if (MapParentheses[left] !== parenthese) {
        return false
      }
    }
  }
  return stack.length === 0
}

export function isValidParenthesisV2(s: string): boolean {
  const sLeftParenthesis: number[] = []
  const sAsterisk: number[] = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      sLeftParenthesis.push(i)
    } else if (s[i] === ')') {
      if (sLeftParenthesis.length) {
        sLeftParenthesis.pop()
      } else if (sAsterisk.length) {
        sAsterisk.pop()
      } else {
        return false
      }
    } else {
      sAsterisk.push(i)
    }
  }

  while (sLeftParenthesis.length && sAsterisk.length) {
    const pos = sLeftParenthesis.pop() as number
    const apos = sAsterisk.pop() as number

    if (apos < pos) {
      return false
    }
  }

  return sLeftParenthesis.length === 0
}

export function longestValidParentheses(s: string): number {
  let max = 0
  let left = 0
  let right = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      left += 1
    } else {
      right += 1
    }

    if (left === right) {
      max = Math.max(max, left + right)
    }

    if (right > left) {
      left = right = 0
    }
  }

  left = right = 0
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '(') {
      left += 1
    } else {
      right += 1
    }

    if (left === right) {
      max = Math.max(max, left + right)
    }

    if (left > right) {
      left = right = 0
    }
  }

  return max
}
