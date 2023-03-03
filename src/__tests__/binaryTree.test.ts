import { BinaryTree } from '../binaryTree';

describe('Test BinaryTree', () => {
  it('BinaryTree should insert', () => {
    const data = [1, 2, null, null, 3, 4, 5];
    const tree = new BinaryTree();
    tree.insert(data);
  });
});
