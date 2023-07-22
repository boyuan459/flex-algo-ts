import { LinkedList } from '../linkedList'

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
})
