export type LongestPalindromeResult = {
  dp: boolean[][]
  answers: number[]
  longestPalindromeSubstring: string
}

export function longestPalindrome(s: string): LongestPalindromeResult {
  const len = s.length
  const dp = new Array(len).fill(0).map(() => new Array(len).fill(false))
  let answers = [0, 0]

  // diff = 0
  for (let i = 0; i < len; i++) {
    dp[i][i] = true
    answers = [i, i]
  }

  // diff = 1
  for (let i = 0; i < len - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true
      answers = [i, i + 1]
    }
  }

  // diff >= 2
  for (let diff = 2; diff < len; diff++) {
    for (let i = 0; i < len - diff; i++) {
      const j = i + diff
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true
        answers = [i, j]
      }
    }
  }

  return {
    dp,
    answers,
    longestPalindromeSubstring: s.substring(answers[0], answers[1] + 1),
  }
}

export type MaxSubArrayResult = {
  max: number
  maxArray: number[]
}

export function maxSubArray(nums: number[]): MaxSubArrayResult {
  let currentArr = [0]
  let maxArr = [0]
  let current = nums[0]
  let max = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]

    if (num + current > num) {
      current = num + current
      currentArr.push(i)
    } else {
      current = num
      currentArr = [i]
    }

    if (current > max) {
      max = current
      maxArr = currentArr.map((item) => item)
    }
  }

  return {
    max,
    maxArray: maxArr,
  }
}
