class BinaryNode {
  value: number;
  left: BSTNode;
  right: BSTNode;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export type BSTNode = BinaryNode | null;
export type BSTNodeValueType = number | null;

export class BST {
  root: BSTNode;

  constructor() {
    this.root = null;
  }

  _insertSingleNode(node: BSTNode, data: number) {
    if (node === null) {
      return;
    }
    if (node?.value > data) {
      if (node.left === null) {
        node.left = new BinaryNode(data);
      } else {
        this._insertSingleNode(node.left, data);
      }
    } else {
      if (node.right === null) {
        node.right = new BinaryNode(data);
      } else {
        this._insertSingleNode(node.right, data);
      }
    }
  }

  insertSingleNode(data: number) {
    if (this.root === null) {
      this.root = new BinaryNode(data);
      return;
    }
    this._insertSingleNode(this.root, data);
  }

  insert(data: number | number[]) {
    if (typeof data === 'number') {
      // single node insert
      this.insertSingleNode(data);
    } else {
      // array insert
      for (const val of data) {
        this.insertSingleNode(val);
      }
    }
  }

  levelOrder(): (number | undefined)[][] {
    if (this.root === null) {
      return [[]];
    }
    const levels = [];
    const queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      const level = [];
      const levelSize = queue.length;
      let count = 0;

      while (count < levelSize) {
        const current = queue.shift();
        level.push(current?.value);
        if (current?.left != null) {
          queue.push(current?.left);
        }
        if (current?.right != null) {
          queue.push(current?.right);
        }
        count += 1;
      }

      levels.push(level);
    }

    return levels;
  }

  _depth(node: BSTNode): number {
    if (node === null) {
      return 0;
    }
    if (node.left === null && node.right === null) {
      return 1;
    }
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

  _rightSideView(node: BSTNode, views: number[], depth: number) {
    if (node === null) {
      return;
    }
    if (views.length <= depth) {
      views.push(node.value);
    }
    if (node.right !== null) {
      this._rightSideView(node.right, views, depth + 1);
    }
    if (node.left !== null) {
      this._rightSideView(node.left, views, depth + 1);
    }
  }

  rightSideView(): number[] {
    const views: number[] = [];
    this._rightSideView(this.root, views, 0);
    return views;
  }

  _leftSideView(node: BSTNode, views: number[], depth: number) {
    if (node === null) {
      return;
    }
    if (views.length <= depth) {
      views.push(node.value);
    }
    if (node.left != null) {
      this._leftSideView(node.left, views, depth + 1);
    }
    if (node.right != null) {
      this._leftSideView(node.right, views, depth + 1);
    }
  }

  leftSideView(): number[] {
    const views: number[] = [];
    this._leftSideView(this.root, views, 0);
    return views;
  }
}
