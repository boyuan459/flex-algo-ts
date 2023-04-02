export type MapParenthesesType = {
  [key: string]: string;
};

const MapParentheses: MapParenthesesType = {
  '(': ')',
  '{': '}',
  '[': ']',
};

export function minRemoveToMakeValid(s: string) {
  const chars = s.split('');
  const stack = [];
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === '(') {
      stack.push(i);
    } else if (chars[i] === ')') {
      if (stack.length === 0) {
        chars[i] = '';
      } else {
        stack.pop();
      }
    }
  }
  for (let j = 0; j < stack.length; j++) {
    chars[stack[j]] = '';
  }
  return chars.join('');
}

export function isValidParentheses(s: string): boolean {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const parenthese = s[i];
    if (MapParentheses[parenthese] !== undefined) {
      stack.push(parenthese);
    } else {
      const left = stack.pop();
      if (left === undefined) {
        return false;
      }
      if (MapParentheses[left] !== parenthese) {
        return false;
      }
    }
  }
  return true;
}
