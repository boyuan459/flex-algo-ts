class BinaryNode {
  value: number;
  left: BinaryNode | null;
  right: BinaryNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree {
  root: BinaryNode | null;

  constructor() {
    this.root = null;
  }

  insert(data: (number | null)[]) {
    if (data.length === 0) {
      return;
    }
    let count = 0;
    if (data[count] !== null) {
      this.root = new BinaryNode(data[count] as number);
    }
    const queue = [];
    queue.push(this.root);
    count += 1;

    while (queue.length > 0) {
      const node = queue.shift();
      if (node?.left === null) {
        if (data[count] !== null) {
          node.left = new BinaryNode(data[count] as number);
        }
      }
      if (node?.left) {
        queue.push(node.left);
      }
      count += 1;
      if (count >= data.length) return;

      if (node?.right === null) {
        if (data[count] !== null) {
          node.right = new BinaryNode(data[count] as number);
        }
      }
      if (node?.right) {
        queue.push(node.right);
      }
      count += 1;
      if (count >= data.length) return;
    }

    return this.root;
  }
}
