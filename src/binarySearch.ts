export function binarySearch(data: number[], target: number): number {
  if (data.length === 0) return -1
  let left = 0
  let right = data.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (data[mid] === target) {
      return mid
    } else if (data[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return -1
}

export function binarySearchRange(
  data: number[],
  target: number,
  start: number,
  end: number,
): number {
  if (data.length === 0) return -1
  let left = start
  let right = end
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (data[mid] === target) {
      return mid
    } else if (data[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return -1
}

export function searchRange(data: number[], target: number): number[] {
  if (data.length === 0) return [-1, -1]
  const index = binarySearch(data, target)
  if (index === -1) return [-1, -1]
  let startIndex = index
  let findIndex = index
  // find start index
  while (findIndex !== -1) {
    startIndex = findIndex
    findIndex = binarySearchRange(data, target, 0, findIndex - 1)
  }

  // find end index
  let endIndex = index
  findIndex = index
  while (findIndex !== -1) {
    endIndex = findIndex
    findIndex = binarySearchRange(data, target, findIndex + 1, data.length - 1)
  }
  return [startIndex, endIndex]
}
