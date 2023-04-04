import { isValidParentheses, minRemoveToMakeValid } from '../stack';

describe('stack test', () => {
  it('isValidParentheses should return true', () => {
    const valid = isValidParentheses('()[]{}');
    expect(valid).toBe(true);
  });

  it('isValidParentheses should return false', () => {
    const valid = isValidParentheses('(]');
    const valid2 = isValidParentheses('()[]{');
    expect(valid).toBe(false);
    expect(valid2).toBe(false);
  });

  it('minRemoveToMakeValid should return the value', () => {
    const s = minRemoveToMakeValid('lee(t(c)o)de)');
    const s2 = minRemoveToMakeValid('a)b(c)d');
    const s3 = minRemoveToMakeValid('))((');
    expect(s).toEqual('lee(t(c)o)de');
    expect(s2).toEqual('ab(c)d');
    expect(s3).toEqual('');
  });
});
