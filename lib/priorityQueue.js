"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityQueue = void 0;
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue(comparator) {
        this._heap = [];
        this._comparator = comparator;
    }
    PriorityQueue.prototype.isEmpty = function () {
        return this._heap.length === 0;
    };
    PriorityQueue.prototype.size = function () {
        return this._heap.length;
    };
    PriorityQueue.prototype._parent = function (index) {
        return Math.floor((index - 1) / 2);
    };
    PriorityQueue.prototype._leftChild = function (index) {
        return 2 * index + 1;
    };
    PriorityQueue.prototype._rightChild = function (index) {
        return 2 * index + 2;
    };
    PriorityQueue.prototype._compare = function (i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    };
    PriorityQueue.prototype._swap = function (i, j) {
        var temp = this._heap[i];
        this._heap[i] = this._heap[j];
        this._heap[j] = temp;
    };
    PriorityQueue.prototype._siftUp = function () {
        var nodeIndex = this.size() - 1;
        while (nodeIndex > 0 && this._compare(nodeIndex, this._parent(nodeIndex))) {
            this._swap(nodeIndex, this._parent(nodeIndex));
            nodeIndex = this._parent(nodeIndex);
        }
    };
    PriorityQueue.prototype.heap = function () {
        return this._heap;
    };
    PriorityQueue.prototype.push = function (value) {
        this._heap.push(value);
        this._siftUp();
        return this._heap.length;
    };
    PriorityQueue.prototype.peek = function () {
        return this._heap[0];
    };
    PriorityQueue.prototype._siftDown = function () {
        var parent = 0;
        while ((this._leftChild(parent) < this.size() && this._compare(this._leftChild(parent), parent)) ||
            (this._rightChild(parent) < this.size() && this._compare(this._rightChild(parent), parent))) {
            var nodeIndex = this._rightChild(parent) && this._compare(this._rightChild(parent), this._leftChild(parent))
                ? this._rightChild(parent)
                : this._leftChild(parent);
            this._swap(parent, nodeIndex);
            parent = nodeIndex;
        }
    };
    PriorityQueue.prototype.pop = function () {
        if (this.isEmpty())
            return undefined;
        var nodeIndex = this.size() - 1;
        if (nodeIndex > 0) {
            this._swap(0, nodeIndex);
        }
        var value = this._heap.pop();
        this._siftDown();
        return value;
    };
    return PriorityQueue;
}());
exports.PriorityQueue = PriorityQueue;
