import { mergeSortedArray, searchRotatedSortedArray } from '../sort'

describe('sort test', () => {
  it('mergeSortedArray should merge the array', () => {
    const nums1 = [1, 2, 3, 0, 0, 0]
    const nums2 = [2, 5, 6]
    mergeSortedArray(nums1, 3, nums2, 3)
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6])
  })

  it('searchRotatedSortedArray should search the array', () => {
    const nums = [3, 4, 6, 7, 0, 1, 2]
    const target = 6

    const idx = searchRotatedSortedArray(nums, target)
    expect(idx).toEqual(2)
  })
})
