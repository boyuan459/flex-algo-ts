declare class BinaryNode {
    value: number;
    left: BSTNode;
    right: BSTNode;
    constructor(value: number);
}
export type BSTNode = BinaryNode | null;
export type BSTNodeValueType = number | null;
export declare class BST {
    root: BSTNode;
    constructor();
    _insertSingleNode(node: BSTNode, data: number): void;
    insertSingleNode(data: number): void;
    insert(data: number | number[]): void;
    levelOrder(): (number | undefined)[][];
    _depth(node: BSTNode): number;
    depth(): number;
    _rightSideView(node: BSTNode, views: number[], depth: number): void;
    rightSideView(): number[];
    _leftSideView(node: BSTNode, views: number[], depth: number): void;
    leftSideView(): number[];
    _isValid(node: BSTNode, min: number, max: number): boolean;
    isValid(): boolean;
}
export {};
