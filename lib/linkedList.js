"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traverseLinkedList = exports.removeNthFromEnd = exports.ListNode = exports.addTwoNumbers = exports.LinkedList = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    return ListNode;
}());
exports.ListNode = ListNode;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.root = null;
    }
    LinkedList.prototype.insertWithArray = function (arr) {
        var current = null;
        for (var i = 0; i < arr.length; i++) {
            var node = new ListNode(arr[i]);
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
            values.push(current.val);
            current = current.next;
        }
        return values;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
function addTwoNumbers(l1, l2) {
    var _a, _b, _c, _d;
    var current1 = l1;
    var current2 = l2;
    var root = null;
    var current = null;
    var carry = 0;
    while (current1 !== null || current2 !== null) {
        var val = ((_a = current1 === null || current1 === void 0 ? void 0 : current1.val) !== null && _a !== void 0 ? _a : 0) + ((_b = current2 === null || current2 === void 0 ? void 0 : current2.val) !== null && _b !== void 0 ? _b : 0) + carry;
        carry = parseInt((val / 10));
        var node = new ListNode(val % 10);
        if (root === null) {
            current = node;
            root = current;
        }
        else if (current !== null) {
            current.next = node;
            current = current.next;
        }
        current1 = (_c = current1 === null || current1 === void 0 ? void 0 : current1.next) !== null && _c !== void 0 ? _c : null;
        current2 = (_d = current2 === null || current2 === void 0 ? void 0 : current2.next) !== null && _d !== void 0 ? _d : null;
    }
    if (carry && current !== null) {
        current.next = new ListNode(carry);
    }
    return root;
}
exports.addTwoNumbers = addTwoNumbers;
function removeNthFromEnd(head, n) {
    var current = head;
    var len = 0;
    while (current !== null) {
        len += 1;
        current = current.next;
    }
    var pos = len - n;
    var count = 0;
    current = head;
    while (count < pos - 1) {
        current = current === null || current === void 0 ? void 0 : current.next;
        count += 1;
    }
    var next = current === null || current === void 0 ? void 0 : current.next;
    if (current !== null) {
        current.next = next === null || next === void 0 ? void 0 : next.next;
    }
    return head;
}
exports.removeNthFromEnd = removeNthFromEnd;
function traverseLinkedList(head) {
    var values = [];
    var current = head;
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }
    return values;
}
exports.traverseLinkedList = traverseLinkedList;
