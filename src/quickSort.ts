function swap(data: number[], i: number, j: number) {
  const temp = data[i]
  data[i] = data[j]
  data[j] = temp
}

export function pivot(data: number[], left: number, right: number): number {
  let p = left
  for (let i = left + 1; i <= right; i++) {
    if (data[p] > data[i]) {
      swap(data, p + 1, i)
      swap(data, p, p + 1)
      p += 1
    }
  }
  return p
}

function _quickSort(data: number[], left: number, right: number) {
  if (left >= right) return
  const p = pivot(data, left, right)
  _quickSort(data, left, p - 1)
  _quickSort(data, p + 1, right)
}

export function quickSort(data: number[]) {
  _quickSort(data, 0, data.length - 1)
}

export function quickSelectPivot(data: number[], left: number, right: number): number {
  let p = right
  for (let i = right - 1; i >= left; i--) {
    if (data[p] < data[i]) {
      swap(data, p - 1, i)
      swap(data, p - 1, p)
      p -= 1
    }
  }
  return p
}

function _quickSelect(data: number[], left: number, right: number, index: number): number {
  const p = quickSelectPivot(data, left, right)
  if (p === index) {
    return data[p]
  } else if (p < index) {
    return _quickSelect(data, p + 1, right, index)
  } else {
    return _quickSelect(data, left, p - 1, index)
  }
}

// 1th index: data.length - 1
// 2th index: data.length - 2
// kth index: data.length - k
export function quickSelect(data: number[], kth: number) {
  return _quickSelect(data, 0, data.length - 1, data.length - kth)
}
