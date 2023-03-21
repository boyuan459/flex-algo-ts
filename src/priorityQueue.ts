type CompareFunc = (a: number, b: number) => boolean;

class PriorityQueue {
  private _heap: Array<number>;
  private _comparator: CompareFunc;

  constructor(comparator: CompareFunc) {
    this._heap = [];
    this._comparator = comparator;
  }

  isEmpty(): boolean {
    return this._heap.length === 0;
  }

  size(): number {
    return this._heap.length;
  }

  _parent(index: number) {
    return Math.floor((index - 1) / 2);
  }

  _leftChild(index: number) {
    return 2 * index + 1;
  }

  _rightChild(index: number) {
    return 2 * index + 2;
  }

  _compare(i: number, j: number) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  _swap(i: number, j: number) {
    const temp = this._heap[i];
    this._heap[i] = this._heap[j];
    this._heap[j] = temp;
  }

  _siftUp() {
    let nodeIndex = this.size() - 1;
    while (nodeIndex > 0 && this._compare(nodeIndex, this._parent(nodeIndex))) {
      this._swap(nodeIndex, this._parent(nodeIndex));
      nodeIndex = this._parent(nodeIndex);
    }
  }

  heap(): Array<number> {
    return this._heap;
  }

  push(value: number): number {
    this._heap.push(value);
    this._siftUp();
    return this._heap.length;
  }

  peek(): number {
    return this._heap[0];
  }

  _siftDown() {
    let parent = 0;
    while (
      (this._leftChild(parent) < this.size() && this._compare(this._leftChild(parent), parent)) ||
      (this._rightChild(parent) < this.size() && this._compare(this._rightChild(parent), parent))
    ) {
      const nodeIndex =
        this._rightChild(parent) && this._compare(this._rightChild(parent), this._leftChild(parent))
          ? this._rightChild(parent)
          : this._leftChild(parent);
      this._swap(parent, nodeIndex);
      parent = nodeIndex;
    }
  }

  pop(): number | undefined {
    if (this.isEmpty()) return undefined;
    const nodeIndex = this.size() - 1;
    if (nodeIndex > 0) {
      this._swap(0, nodeIndex);
    }
    const value = this._heap.pop();
    this._siftDown();
    return value;
  }
}

export { PriorityQueue, CompareFunc };
