type CompareFunc = (a: number, b: number) => boolean;
declare class PriorityQueue {
    private _heap;
    private _comparator;
    constructor(comparator: CompareFunc);
    isEmpty(): boolean;
    size(): number;
    _parent(index: number): number;
    _leftChild(index: number): number;
    _rightChild(index: number): number;
    _compare(i: number, j: number): boolean;
    _swap(i: number, j: number): void;
    _siftUp(): void;
    heap(): Array<number>;
    push(value: number): number;
    peek(): number;
    _siftDown(): void;
    pop(): number | undefined;
}
export { PriorityQueue, CompareFunc };
