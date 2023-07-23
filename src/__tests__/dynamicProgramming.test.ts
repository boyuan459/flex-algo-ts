import { longestPalindrome, maxSubArray } from '../dynamicProgramming'

describe('dynamic programming', () => {
  it('test longest palidromic substring', () => {
    const str = 'babad'
    const { longestPalindromeSubstring } = longestPalindrome(str)
    expect(longestPalindromeSubstring).toEqual('aba')
  })

  it('test max sub array', () => {
    const { max } = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
    expect(max).toEqual(6)

    expect(maxSubArray([1]).max).toEqual(1)

    expect(maxSubArray([5, 4, -1, 7, 8]).max).toEqual(23)
  })
})
