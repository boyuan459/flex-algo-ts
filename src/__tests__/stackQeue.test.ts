import { StackQueue } from '../stackQueue';

describe('test StackQueue', () => {
  it('should push', () => {
    const queue = new StackQueue();
    queue.push(1);
  });

  it('should peek', () => {
    const queue = new StackQueue();
    queue.push(1);
    const val = queue.peek();
    expect(val).toBe(1);
  });

  it('should pop', () => {
    const queue = new StackQueue();
    queue.push(1);
    queue.push(2);
    const val = queue.pop();
    expect(val).toBe(1);
  });
});
