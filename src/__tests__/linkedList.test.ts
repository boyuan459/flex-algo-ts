import {
  LinkedList,
  addTwoNumbers,
  ListNode,
  removeNthFromEnd,
  traverseLinkedList,
} from '../linkedList'

describe('test LinkedList', () => {
  it('inserWithArray', () => {
    const list = new LinkedList()
    list.insertWithArray([1, 2, 3, 4, 5])
  })

  it('reverseBetween should return value', () => {
    const list = new LinkedList()
    list.insertWithArray([1, 2, 3, 4, 5])
    list.reverseBetween(2, 4)
    const values = list.traverse()
    expect(values).toEqual([1, 4, 3, 2, 5])
  })

  it('addTwoNumbers should return value', () => {
    const list1 = new LinkedList()
    list1.insertWithArray([2, 4, 3])
    const list2 = new LinkedList()
    list2.insertWithArray([5, 6, 4])
    const root = addTwoNumbers(list1.root, list2.root)
    let current: ListNode | null = root
    const values: number[] = []
    while (current !== null) {
      values.push(current.val as number)
      current = current?.next
    }
    expect(values).toEqual([7, 0, 8])
  })

  it('removeNthFromEnd should remove the element', () => {
    const list = new LinkedList()
    list.insertWithArray([2, 4, 5, 6, 7])
    const root = removeNthFromEnd(list.root as ListNode, 2)
    const values = traverseLinkedList(root)
    expect(values).toEqual([2, 4, 5, 7])
  })
})
