import { mergeSortedArray } from '../sort'

describe('sort test', () => {
  it('mergeSortedArray should merge the array', () => {
    const nums1 = [1, 2, 3, 0, 0, 0]
    const nums2 = [2, 5, 6]
    mergeSortedArray(nums1, 3, nums2, 3)
    console.log('nums1', nums1)
  })
})
