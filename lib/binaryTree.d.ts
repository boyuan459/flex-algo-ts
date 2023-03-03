export declare class BinaryNode {
    value: number;
    left: BinaryNode | null;
    right: BinaryNode | null;
    constructor(value: number);
}
export declare class BinaryTree {
    root: BinaryNode | null;
    constructor();
    insert(data: (number | null)[]): BinaryNode | null | undefined;
    levelOrder(): (number | undefined)[][];
}
