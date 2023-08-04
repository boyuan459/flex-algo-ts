import {
  isValidParentheses,
  minRemoveToMakeValid,
  isValidParenthesisV2,
  longestValidParentheses,
} from '../stack'

describe('stack test', () => {
  it('isValidParentheses should return true', () => {
    const valid = isValidParentheses('()[]{}')
    expect(valid).toBe(true)
  })

  it('isValidParentheses should return false', () => {
    const valid = isValidParentheses('(]')
    const valid2 = isValidParentheses('()[]{')
    expect(valid).toBe(false)
    expect(valid2).toBe(false)
  })

  it('minRemoveToMakeValid should return the value', () => {
    const s = minRemoveToMakeValid('lee(t(c)o)de)')
    const s2 = minRemoveToMakeValid('a)b(c)d')
    const s3 = minRemoveToMakeValid('))((')
    expect(s).toEqual('lee(t(c)o)de')
    expect(s2).toEqual('ab(c)d')
    expect(s3).toEqual('')
  })

  it('isValidParenthesisV2 should return the value', () => {
    const valid1 = isValidParenthesisV2('(*))')
    expect(valid1).toEqual(true)
    const valid2 = isValidParenthesisV2('(*)')
    expect(valid2).toEqual(true)
    const valid3 = isValidParenthesisV2('(((**')
    expect(valid3).toEqual(false)
    const s =
      '((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()'
    const valid4 = isValidParenthesisV2(s)
    expect(valid4).toEqual(true)
  })

  it('longestValidParentheses should return the value', () => {
    const max = longestValidParentheses(')()())')
    expect(max).toEqual(4)

    expect(longestValidParentheses('(()')).toEqual(2)
  })
})
