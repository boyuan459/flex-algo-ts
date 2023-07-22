import { longestPalindrome } from '../dynamicProgramming'

describe('dynamic programming', () => {
  it('test longest palidromic substring', () => {
    const str = 'babad'
    const { longestPalindromeSubstring } = longestPalindrome(str)
    expect(longestPalindromeSubstring).toEqual('aba')
  })
})
