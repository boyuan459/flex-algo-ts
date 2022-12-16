type compareFunc = (a: number, b: number) => boolean;

export class PriorityQueue {
  private comparator: compareFunc;

  constructor (comparator: compareFunc) {
    this.comparator = comparator;
  }
}
