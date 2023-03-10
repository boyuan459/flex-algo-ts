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
type NodeValueType = number | undefined;

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

  _depth(node: BinNode): number {
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

  _rightSideView(node: BinNode, values: NodeValueType[], depth: number) {
    if (node === null) {
      return;
    }
    if (values.length <= depth) {
      values.push(node?.value);
    }
    if (node?.right != null) {
      this._rightSideView(node.right, values, depth + 1);
    }
    if (node?.left != null) {
      this._rightSideView(node.left, values, depth + 1);
    }
  }

  rightSideView(): NodeValueType[] {
    const views: NodeValueType[] = [];
    this._rightSideView(this.root, views, 0);
    return views;
  }

  _leftSideView(node: BinNode, values: NodeValueType[], depth: number) {
    if (node === null) {
      return;
    }
    if (values.length <= depth) {
      values.push(node?.value);
    }
    if (node?.left != null) {
      this._leftSideView(node.left, values, depth + 1);
    }
    if (node?.right != null) {
      this._leftSideView(node.right, values, depth + 1);
    }
  }

  leftSideView(): NodeValueType[] {
    const views: NodeValueType[] = [];
    this._leftSideView(this.root, views, 0);
    return views;
  }
}
