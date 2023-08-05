declare class ListNode {
    val: number | undefined;
    next: ListNode | null;
    constructor(val?: number);
}
declare class LinkedList {
    root: ListNode | null;
    constructor();
    insertWithArray(arr: number[]): void;
    reverseBetween(left: number, right: number): void;
    traverse(): number[];
}
declare function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode;
declare function removeNthFromEnd(head: ListNode, n: number): ListNode;
declare function traverseLinkedList(head: ListNode): number[];
export { LinkedList, addTwoNumbers, ListNode, removeNthFromEnd, traverseLinkedList };
