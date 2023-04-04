"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var LinkedNode = /** @class */ (function () {
    function LinkedNode(data) {
        this.data = data;
        this.next = null;
    }
    return LinkedNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.root = null;
    }
    LinkedList.prototype.insertWithArray = function (arr) {
        var current = null;
        for (var i = 0; i < arr.length; i++) {
            var node = new LinkedNode(arr[i]);
            if (this.root === null) {
                this.root = node;
            }
            else {
                // @ts-ignore
                current === null || current === void 0 ? void 0 : current.next = node;
            }
            current = node;
        }
    };
    LinkedList.prototype.reverseBetween = function (left, right) {
        var i = 0;
        var current = this.root;
        var prev = null;
        while (i < left - 1) {
            prev = current;
            current = current === null || current === void 0 ? void 0 : current.next;
            i += 1;
        }
        var preStart = prev;
        var next = null;
        prev = null;
        while (i < right) {
            next = current === null || current === void 0 ? void 0 : current.next;
            if (current !== undefined && current !== null && prev !== undefined) {
                current.next = prev;
            }
            prev = current;
            current = next;
            i += 1;
        }
        next = preStart === null || preStart === void 0 ? void 0 : preStart.next;
        if (preStart !== undefined && preStart !== null && prev !== undefined) {
            preStart.next = prev;
        }
        if (next !== undefined && next !== null && current !== undefined) {
            next.next = current;
        }
    };
    LinkedList.prototype.traverse = function () {
        var current = this.root;
        var values = [];
        while (current !== null) {
            values.push(current.data);
            current = current.next;
        }
        return values;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
