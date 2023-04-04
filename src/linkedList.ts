class LinkedNode {
  data: number;
  next: LinkedNode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

type NodeType = LinkedNode | null | undefined;

class LinkedList {
  root: LinkedNode | null;

  constructor() {
    this.root = null;
  }

  insertWithArray(arr: number[]) {
    let current = null;
    for (let i = 0; i < arr.length; i++) {
      const node = new LinkedNode(arr[i]);
      if (this.root === null) {
        this.root = node;
      } else {
        // @ts-ignore
        current?.next = node;
      }
      current = node;
    }
  }

  reverseBetween(left: number, right: number) {
    let i = 0;
    let current: NodeType = this.root;
    let prev: NodeType = null;
    while (i < left - 1) {
      prev = current;
      current = current?.next;
      i += 1;
    }
    const preStart = prev;
    let next = null;
    prev = null;
    while (i < right) {
      next = current?.next;
      if (current !== undefined && current !== null && prev !== undefined) {
        current.next = prev;
      }
      prev = current;
      current = next;
      i += 1;
    }
    next = preStart?.next;
    if (preStart !== undefined && preStart !== null && prev !== undefined) {
      preStart.next = prev;
    }
    if (next !== undefined && next !== null && current !== undefined) {
      next.next = current;
    }
  }

  traverse(): number[] {
    let current = this.root;
    const values = [];
    while (current !== null) {
      values.push(current.data);
      current = current.next;
    }
    return values;
  }
}

export { LinkedList };
