class BinaryNode {
  value: number
  left: BSTNode
  right: BSTNode

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export type BSTNode = BinaryNode | null
export type BSTNodeValueType = number | null

export class BST {
  root: BSTNode

  constructor() {
    this.root = null
  }

  _insertSingleNode(node: BSTNode, data: number | null) {
    if (node === null || data === null) {
      return
    }
    if (node?.value > data) {
      if (node.left === null) {
        node.left = new BinaryNode(data)
      } else {
        this._insertSingleNode(node.left, data)
      }
    } else {
      if (node.right === null) {
        node.right = new BinaryNode(data)
      } else {
        this._insertSingleNode(node.right, data)
      }
    }
  }

  insertSingleNode(data: number | null) {
    if (this.root === null) {
      this.root = new BinaryNode(data as number)
      return
    }
    this._insertSingleNode(this.root, data)
  }

  insert(data: number | (number | null)[]) {
    if (typeof data === 'number') {
      // single node insert
      this.insertSingleNode(data)
    } else {
      // array insert
      for (const val of data) {
        this.insertSingleNode(val)
      }
    }
  }

  levelOrder(): (number | undefined)[][] {
    if (this.root === null) {
      return [[]]
    }
    const levels = []
    const queue = []
    queue.push(this.root)

    while (queue.length > 0) {
      const level = []
      const levelSize = queue.length
      let count = 0

      while (count < levelSize) {
        const current = queue.shift()
        level.push(current?.value)
        if (current?.left != null) {
          queue.push(current?.left)
        }
        if (current?.right != null) {
          queue.push(current?.right)
        }
        count += 1
      }

      levels.push(level)
    }

    return levels
  }

  _depth(node: BSTNode): number {
    if (node === null) {
      return 0
    }
    if (node.left === null && node.right === null) {
      return 1
    }
    let leftDepth = 0
    let rightDepth = 0
    if (node.left !== null) {
      leftDepth = this._depth(node.left) + 1
    }
    if (node.right !== null) {
      rightDepth = this._depth(node.right) + 1
    }
    return leftDepth > rightDepth ? leftDepth : rightDepth
  }

  depth(): number {
    return this._depth(this.root)
  }

  _rightSideView(node: BSTNode, views: number[], depth: number) {
    if (node === null) {
      return
    }
    if (views.length <= depth) {
      views.push(node.value)
    }
    if (node.right !== null) {
      this._rightSideView(node.right, views, depth + 1)
    }
    if (node.left !== null) {
      this._rightSideView(node.left, views, depth + 1)
    }
  }

  rightSideView(): number[] {
    const views: number[] = []
    this._rightSideView(this.root, views, 0)
    return views
  }

  _leftSideView(node: BSTNode, views: number[], depth: number) {
    if (node === null) {
      return
    }
    if (views.length <= depth) {
      views.push(node.value)
    }
    if (node.left != null) {
      this._leftSideView(node.left, views, depth + 1)
    }
    if (node.right != null) {
      this._leftSideView(node.right, views, depth + 1)
    }
  }

  leftSideView(): number[] {
    const views: number[] = []
    this._leftSideView(this.root, views, 0)
    return views
  }

  _isValid(node: BSTNode, min: number, max: number): boolean {
    if (node === null) return true
    if (node?.value <= min || node?.value >= max) {
      return false
    }
    if (!this._isValid(node.left, min, node.value)) {
      return false
    }
    if (!this._isValid(node.right, node.value, max)) {
      return false
    }
    return true
  }

  isValid(): boolean {
    return this._isValid(this.root, -Infinity, Infinity)
  }

  _dfsKthSmallest(node: BSTNode, k: number, arr: number[]) {
    if (node === null || arr.length === k) return
    this._dfsKthSmallest(node.left, k, arr)
    // if (arr.length === k) return
    arr.push(node.value)
    // if (arr.length === k) return
    this._dfsKthSmallest(node.right, k, arr)
  }

  kthSmallest(k: number): number | undefined {
    const arr: number[] = []
    this._dfsKthSmallest(this.root, k, arr)
    return arr[k - 1]
  }

  _lowestCommonAncestor(node: BSTNode, p: number, q: number): number | null {
    if (node === null) return null
    if (node.value === p || node.value === q) return node.value
    const lp = this._lowestCommonAncestor(node.left, p, q)
    const rp = this._lowestCommonAncestor(node.right, p, q)
    if (lp && rp) return node.value
    if (lp) {
      return lp
    }
    if (rp) {
      return rp
    }
    return null
  }

  lowestCommonAncestor(p: number, q: number): number | null {
    return this._lowestCommonAncestor(this.root, p, q)
  }
}
