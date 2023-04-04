declare class LinkedNode {
    data: number;
    next: LinkedNode | null;
    constructor(data: number);
}
declare class LinkedList {
    root: LinkedNode | null;
    constructor();
    insertWithArray(arr: number[]): void;
    reverseBetween(left: number, right: number): void;
    traverse(): number[];
}
export { LinkedList };
