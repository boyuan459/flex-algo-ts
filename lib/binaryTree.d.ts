export declare class BinaryNode {
    value: number;
    left: BinaryNode | null;
    right: BinaryNode | null;
    constructor(value: number);
}
type BinNode = BinaryNode | null | undefined;
export declare class BinaryTree {
    root: BinNode;
    constructor();
    insert(data: (number | null)[]): BinNode;
    levelOrder(): (number | undefined)[][];
    _depth(node: BinaryNode | null | undefined): number;
    depth(): number;
}
export {};
