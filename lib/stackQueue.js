"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackQueue = void 0;
var StackQueue = /** @class */ (function () {
    function StackQueue() {
        this._in = [];
        this._out = [];
    }
    StackQueue.prototype.push = function (value) {
        this._in.push(value);
    };
    StackQueue.prototype.pop = function () {
        if (this._out.length === 0) {
            while (this._in.length > 0) {
                var val = this._in.pop();
                if (val === undefined) {
                    return undefined;
                }
                this._out.push(val);
            }
        }
        return this._out.pop();
    };
    StackQueue.prototype.peek = function () {
        if (this._out.length === 0) {
            while (this._in.length > 0) {
                var val = this._in.pop();
                if (val === undefined) {
                    return undefined;
                }
                this._out.push(val);
            }
        }
        return this._out[this._out.length - 1];
    };
    StackQueue.prototype.empty = function () {
        return this._in.length === 0 && this._out.length === 0;
    };
    return StackQueue;
}());
exports.StackQueue = StackQueue;
