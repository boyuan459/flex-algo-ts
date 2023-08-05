class ListNode {
  val: number | undefined
  next: ListNode | null

  constructor(val?: number) {
    this.val = val
    this.next = null
  }
}

type NodeType = ListNode | null | undefined

class LinkedList {
  root: ListNode | null

  constructor() {
    this.root = null
  }

  insertWithArray(arr: number[]) {
    let current = null
    for (let i = 0; i < arr.length; i++) {
      const node = new ListNode(arr[i])
      if (this.root === null) {
        this.root = node
      } else {
        // @ts-ignore
        current?.next = node
      }
      current = node
    }
  }

  reverseBetween(left: number, right: number) {
    let i = 0
    let current: NodeType = this.root
    let prev: NodeType = null
    while (i < left - 1) {
      prev = current
      current = current?.next
      i += 1
    }
    const preStart = prev
    let next = null
    prev = null
    while (i < right) {
      next = current?.next
      if (current !== undefined && current !== null && prev !== undefined) {
        current.next = prev
      }
      prev = current
      current = next
      i += 1
    }
    next = preStart?.next
    if (preStart !== undefined && preStart !== null && prev !== undefined) {
      preStart.next = prev
    }
    if (next !== undefined && next !== null && current !== undefined) {
      next.next = current
    }
  }

  traverse(): number[] {
    let current = this.root
    const values: number[] = []
    while (current !== null) {
      values.push(current.val as number)
      current = current.next
    }
    return values
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
  let current1 = l1
  let current2 = l2
  let root = null
  let current: ListNode | null = null
  let carry = 0
  while (current1 !== null || current2 !== null) {
    const val = (current1?.val ?? 0) + (current2?.val ?? 0) + carry
    carry = parseInt((val / 10) as unknown as string)
    const node = new ListNode(val % 10)
    if (root === null) {
      current = node
      root = current
    } else if (current !== null) {
      current.next = node
      current = current.next
    }
    current1 = current1?.next ?? null
    current2 = current2?.next ?? null
  }
  if (carry && current !== null) {
    current.next = new ListNode(carry)
  }
  return root as ListNode
}

function removeNthFromEnd(head: ListNode, n: number): ListNode {
  let current: ListNode | null | undefined = head
  let len = 0
  while (current !== null) {
    len += 1
    current = current.next
  }
  const pos = len - n
  let count = 0
  current = head
  while (count < pos - 1) {
    current = current?.next
    count += 1
  }
  const next = current?.next
  if (current !== null) {
    current.next = next?.next as ListNode
  }
  return head
}

function traverseLinkedList(head: ListNode): number[] {
  const values: number[] = []
  let current = head
  while (current !== null) {
    values.push(current.val as number)
    current = current.next as ListNode
  }

  return values
}

export { LinkedList, addTwoNumbers, ListNode, removeNthFromEnd, traverseLinkedList }
