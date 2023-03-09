import { BinaryTree } from '../binaryTree';

describe('Test BinaryTree', () => {
  it('BinaryTree should insert', () => {
    const data = [1, 2, null, null, 3, 4, 5];
    const tree = new BinaryTree();
    tree.insert(data);
  });

  it('BinaryTree should return level order', () => {
    const data = [0, 1, 2, 3, 4, 5, 6];
    const tree = new BinaryTree();
    tree.insert(data);
    const levels = tree.levelOrder();
    expect(levels).toEqual([[0], [1, 2], [3, 4, 5, 6]]);
  });

  it('BinaryTree should return depth', () => {
    const data = [3, 9, 20, null, null, 15, 7];
    const tree = new BinaryTree();
    tree.insert(data);
    const depth = tree.depth();
    expect(depth).toEqual(3);
  });
});
