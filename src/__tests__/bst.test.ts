import { BST } from '../bst';

describe('Test BST', () => {
  it('BST should insert array', () => {
    const tree = new BST();
    tree.insert([1, 2, 3, 4, 5]);
  });

  it('BST should insert data', () => {
    const tree = new BST();
    tree.insert(3);
    tree.insert(5);
    tree.insert(4);
  });

  it('BST should return level order', () => {
    const tree = new BST();
    tree.insert([3, 1, 5, 0, 2, 4, 6]);
    const levels = tree.levelOrder();
    expect(levels).toEqual([[3], [1, 5], [0, 2, 4, 6]]);
  });
});
