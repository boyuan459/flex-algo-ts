export function binarySearch(data: number[], target: number): number {
  if (data.length === 0) return -1;
  let left = 0;
  let right = data.length - 1;
  while (left <= right) {
    const mid = (left + right) / 2;
    if (data[mid] === target) {
      return mid;
    } else if (data[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}
