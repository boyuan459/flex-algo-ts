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
