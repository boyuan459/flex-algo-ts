import { ValueType } from './types'

class StackQueue {
  private _in: ValueType[]
  private _out: ValueType[]

  constructor() {
    this._in = []
    this._out = []
  }

  push(value: ValueType) {
    this._in.push(value)
  }

  pop(): ValueType | undefined {
    if (this._out.length === 0) {
      while (this._in.length > 0) {
        const val = this._in.pop()
        if (val === undefined) {
          return undefined
        }
        this._out.push(val)
      }
    }
    return this._out.pop()
  }

  peek(): ValueType | undefined {
    if (this._out.length === 0) {
      while (this._in.length > 0) {
        const val = this._in.pop()
        if (val === undefined) {
          return undefined
        }
        this._out.push(val)
      }
    }
    return this._out[this._out.length - 1]
  }

  empty(): boolean {
    return this._in.length === 0 && this._out.length === 0
  }
}

export { StackQueue }
