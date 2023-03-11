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
});
