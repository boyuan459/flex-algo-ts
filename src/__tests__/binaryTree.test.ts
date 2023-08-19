import { BinaryTree } from '../binaryTree'

describe('Test BinaryTree', () => {
  it('BinaryTree should insert', () => {
    const data = [1, 2, null, null, 3, 4, 5]
    const tree = new BinaryTree()
    tree.insert(data)
  })

  it('BinaryTree should return level order', () => {
    const data = [0, 1, 2, 3, 4, 5, 6]
    const tree = new BinaryTree()
    tree.insert(data)
    const levels = tree.levelOrder()
    expect(levels).toEqual([[0], [1, 2], [3, 4, 5, 6]])
  })

  it('BinaryTree should return depth', () => {
    const data = [3, 9, 20, null, null, 15, 7]
    const tree = new BinaryTree()
    tree.insert(data)
    const depth = tree.depth()
    expect(depth).toEqual(3)
  })

  it('BinaryTree should return right side views', () => {
    const data = [1, 2, 3, null, 5, null, 4]
    const tree = new BinaryTree()
    tree.insert(data)
    const views = tree.rightSideView()
    expect(views).toEqual([1, 3, 4])
  })

  it('BinaryTree should return left side views', () => {
    const data = [1, 2, 3, null, 5, null, 4]
    const tree = new BinaryTree()
    tree.insert(data)
    const views = tree.leftSideView()
    expect(views).toEqual([1, 2, 5])
  })

  it('BinaryTree should count the complete tree nodes', () => {
    const data = [0, 1, 2, 3, 4, 5]
    const tree = new BinaryTree()
    tree.insert(data)
    const height = tree.height()
    expect(height).toEqual(2)
    const count = tree.countCompleteTreeNodes()
    expect(count).toEqual(6)
  })

  it('BinaryTree should return the diameter', () => {
    const data = [1, 2, 3, 4, 5]
    const tree = new BinaryTree()
    tree.insert(data)
    const diameter = tree.diameter()
    expect(diameter).toEqual(3)
  })

  it('BinaryTree should return the maximum width', () => {
    const data = [1, 3, 2, 5, 3, null, 9]
    const tree = new BinaryTree()
    tree.insert(data)
    const max = tree.maxWidth()
    expect(max).toEqual(4)
  })
})
