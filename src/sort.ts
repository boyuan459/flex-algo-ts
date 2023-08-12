function mergeSortedArray(nums1: number[], m: number, nums2: number[], n: number) {
  let resultCount = nums1.length - 1
  let nums1Count = m - 1
  let nums2Count = n - 1

  while (nums1Count >= 0 && nums2Count >= 0) {
    if (nums1[nums1Count] > nums2[nums2Count]) {
      nums1[resultCount] = nums1[nums1Count]
      nums1Count -= 1
    } else {
      nums1[resultCount] = nums2[nums2Count]
      nums2Count -= 1
    }
    resultCount -= 1
  }

  while (nums2Count >= 0) {
    nums1[resultCount] = nums2[nums2Count]
    resultCount -= 1
    nums2Count -= 1
  }
}

function searchRotatedSortedArray(nums: number[], target: number) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = parseInt(((left + right) / 2) as unknown as string)

    if (target === nums[mid]) {
      return mid
    } else if (nums[mid] > target) {
      if (target >= nums[left] || nums[mid - 1] < nums[right]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else if (nums[mid] < target) {
      if (target <= nums[right] || nums[mid + 1] > nums[left]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return -1
}

export { mergeSortedArray, searchRotatedSortedArray }
