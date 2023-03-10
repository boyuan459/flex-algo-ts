export declare class BinaryNode {
    value: number;
    left: BinaryNode | null;
    right: BinaryNode | null;
    constructor(value: number);
}
type BinNode = BinaryNode | null | undefined;
type NodeValueType = number | undefined;
export declare class BinaryTree {
    root: BinNode;
    constructor();
    insert(data: (number | null)[]): BinNode;
    levelOrder(): (number | undefined)[][];
    _depth(node: BinNode): number;
    depth(): number;
    _rightSideView(node: BinNode, values: NodeValueType[], depth: number): void;
    rightSideView(): NodeValueType[];
    _leftSideView(node: BinNode, values: NodeValueType[], depth: number): void;
    leftSideView(): NodeValueType[];
}
export {};
