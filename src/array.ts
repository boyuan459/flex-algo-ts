type MapNumber = {
  [key: number]: number
}

export function twoSum(nums: number[], target: number) {
  const map: MapNumber = {}
  for (let i = 0; i < nums.length; i++) {
    const expect = target - nums[i]
    if (map[expect] !== undefined) {
      return [map[expect], i]
    }
    map[nums[i]] = i
  }
  return [-1, -1]
}

export function maxArea(heights: number[]): number {
  if (heights.length === 0) return 0
  let max = 0
  let left = 0
  let right = heights.length - 1
  while (left < right) {
    const area = Math.min(heights[left], heights[right]) * (right - left)
    max = Math.max(max, area)
    if (heights[left] < heights[right]) {
      left += 1
    } else {
      right -= 1
    }
  }
  return max
}

export function moveZeroes(nums: number[]) {
  let p = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[p] = nums[i]
      p += 1
    }
  }

  while (p < nums.length) {
    nums[p] = 0
    p += 1
  }
}

export function findDuplicate(nums: number[]): number {
  const map: Record<number, number> = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      return nums[i]
    } else {
      map[nums[i]] = i
    }
  }
  return -1
}

export function maxProfit(prices: number[]): number {
  let max = 0
  let min = Infinity

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i])
    max = Math.max(max, prices[i] - min)
  }

  return max
}
