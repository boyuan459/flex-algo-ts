import { twoSum, maxArea, moveZeroes, findDuplicate } from '../array'

describe('array test', () => {
  it('twoSum should return the indexies', () => {
    const indexies = twoSum([2, 7, 11, 15], 9)
    const indexies2 = twoSum([3, 2, 4], 6)
    const indexies3 = twoSum([3, 3], 6)
    expect(indexies).toEqual([0, 1])
    expect(indexies2).toEqual([1, 2])
    expect(indexies3).toEqual([0, 1])
  })

  it('maxArea should return the value', () => {
    const area = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
    const area2 = maxArea([1, 1])
    expect(area).toBe(49)
    expect(area2).toBe(1)
  })

  it('moveZeroes should return the value', () => {
    const nums = [0, 2, 0, 3, 0, 4, 5]
    moveZeroes(nums)
    expect(nums).toEqual([2, 3, 4, 5, 0, 0, 0])

    const nums2 = [0, 1, 0, 3, 12]
    moveZeroes(nums2)
    expect(nums2).toEqual([1, 3, 12, 0, 0])
  })

  it('findDuplicate should return the value', () => {
    const nums = [3, 1, 3, 4, 2]
    const duplicate = findDuplicate(nums)
    expect(duplicate).toEqual(3)

    expect(findDuplicate([1, 3, 4, 2, 2])).toEqual(2)
  })
})
