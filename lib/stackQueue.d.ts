import { ValueType } from './types';
declare class StackQueue {
    private _in;
    private _out;
    constructor();
    push(value: ValueType): void;
    pop(): ValueType | undefined;
    peek(): ValueType | undefined;
    empty(): boolean;
}
export { StackQueue };
