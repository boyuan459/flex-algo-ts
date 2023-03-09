export class BinaryNode {
  value: number;
  left: BinaryNode | null;
  right: BinaryNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

type BinNode = BinaryNode | null | undefined;

export class BinaryTree {
  root: BinNode;

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
      const node: BinNode = queue.shift();
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

  levelOrder(): (number | undefined)[][] {
    const queue = [];
    const levels = [];
    queue.push(this.root);
    while (queue.length) {
      const level = [];
      const levelSize = queue.length;
      let count = 0;
      while (count < levelSize) {
        const current = queue.shift();
        count += 1;
        level.push(current?.value);
        if (current?.left) {
          queue.push(current.left);
        }
        if (current?.right) {
          queue.push(current.right);
        }
      }
      levels.push(level);
    }
    return levels;
  }

  _depth(node: BinaryNode | null | undefined): number {
    if (node == null) return 0;
    if (node?.left === null && node.right === null) return 1;

    let leftDepth = 0;
    let rightDepth = 0;
    if (node.left !== null) {
      leftDepth = this._depth(node.left) + 1;
    }
    if (node.right !== null) {
      rightDepth = this._depth(node.right) + 1;
    }

    return leftDepth > rightDepth ? leftDepth : rightDepth;
  }

  depth(): number {
    return this._depth(this.root);
  }
}
