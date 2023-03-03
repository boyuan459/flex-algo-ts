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
});
