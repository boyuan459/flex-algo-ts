import { PriorityQueue } from '../priorityQueue';

describe('test PriorityQueue', () => {
  it('should return true if PriorityQueue is empty', () => {
    const pq = new PriorityQueue((a: number, b: number) => a > b);
    expect(pq.isEmpty()).toBe(true);
  });

  it('should return 0 if PriorityQueue is empty', () => {
    const pq = new PriorityQueue((a: number, b: number) => a < b);
    expect(pq.size()).toBe(0);
  });

  it('should be able to push and peek', () => {
    const pq = new PriorityQueue((a: number, b: number) => a > b);
    pq.push(7);
    pq.push(8);
    pq.push(5);
    pq.push(3);
    pq.push(12);
    pq.push(14);
    const max = pq.peek();
    expect(max).toBe(14);
  });

  it('should be able to get the Min/Max after pop', () => {
    const pq = new PriorityQueue((a: number, b: number) => a > b);
    pq.push(7);
    pq.push(8);
    pq.push(5);
    pq.push(3);
    pq.push(12);
    pq.push(14);
    let max = pq.pop();
    expect(max).toBe(14);
    max = pq.pop();
    expect(max).toBe(12);
    max = pq.pop();
    expect(max).toBe(8);
  });

  it('should be able to get the undefined after pop an empty PriorityQueue', () => {
    const pq = new PriorityQueue((a: number, b: number) => a > b);
    pq.push(7);
    pq.push(8);
    let max = pq.pop();
    expect(max).toBe(8);
    max = pq.pop();
    expect(max).toBe(7);
    max = pq.pop();
    expect(max).toBe(undefined);
  });
});
