function swap(data: number[], i: number, j: number) {
  const temp = data[i];
  data[i] = data[j];
  data[j] = temp;
}

function pivot(data: number[], left: number, right: number): number {
  let p = left;
  for (let i = left + 1; i <= right; i++) {
    if (data[p] > data[i]) {
      swap(data, p + 1, i);
      swap(data, p, p + 1);
      p += 1;
    }
  }
  return p;
}

function _quickSort(data: number[], left: number, right: number) {
  if (left >= right) return;
  const p = pivot(data, left, right);
  _quickSort(data, left, p - 1);
  _quickSort(data, p + 1, right);
}

export function quickSort(data: number[]) {
  _quickSort(data, 0, data.length - 1);
}
