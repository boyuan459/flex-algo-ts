import { BST } from '../bst'

describe('Test BST', () => {
  it('BST should insert array', () => {
    const tree = new BST()
    tree.insert([1, 2, 3, 4, 5])
  })

  it('BST should insert data', () => {
    const tree = new BST()
    tree.insert(3)
    tree.insert(5)
    tree.insert(4)
  })

  it('BST should return level order', () => {
    const tree = new BST()
    tree.insert([3, 1, 5, 0, 2, 4, 6])
    const levels = tree.levelOrder()
    expect(levels).toEqual([[3], [1, 5], [0, 2, 4, 6]])
  })

  it('BST should return depth', () => {
    const tree = new BST()
    tree.insert([3, 1, 5, 0, 2, 4, 6])
    const depth = tree.depth()
    expect(depth).toEqual(3)
  })

  it('BST should return right side view', () => {
    const tree = new BST()
    tree.insert([3, 1, 5, 0, 2, 4, 6])
    const views = tree.rightSideView()
    expect(views).toEqual([3, 5, 6])
  })

  it('BST should reteurn left side view', () => {
    const tree = new BST()
    tree.insert([3, 1, 5, 0, 2, 4, 6])
    const views = tree.leftSideView()
    expect(views).toEqual([3, 1, 0])
  })

  it('BST should validate', () => {
    const tree = new BST()
    tree.insert([3, 1, 5, 0, 2, 4, 6])
    const valid = tree.isValid()
    expect(valid).toEqual(true)
  })

  it('BST should return the kth smallest element', () => {
    const tree = new BST()
    tree.insert([3, 1, 4, null, 2])
    const k = 1
    const kth = tree.kthSmallest(k)
    expect(kth).toEqual(1)
  })

  it('BST should return the kth smallest element', () => {
    const tree = new BST()
    tree.insert([5, 3, 6, 2, 4, null, null, 1])
    const k = 4
    const kth = tree.kthSmallest(k)
    expect(kth).toEqual(4)
  })

  it('BST should return the lowest common ancestor', () => {
    const tree = new BST()
    tree.insert([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
    const lca = tree.lowestCommonAncestor(2, 8)
    expect(lca).toEqual(6)
  })

  it('BST should return the lowest common ancestor', () => {
    const tree = new BST()
    tree.insert([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
    const lca = tree.lowestCommonAncestor(2, 4)
    expect(lca).toEqual(2)
  })
})
