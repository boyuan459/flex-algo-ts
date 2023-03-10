"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = exports.BinaryNode = void 0;
var BinaryNode = /** @class */ (function () {
    function BinaryNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return BinaryNode;
}());
exports.BinaryNode = BinaryNode;
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    BinaryTree.prototype.insert = function (data) {
        if (data.length === 0) {
            return;
        }
        var count = 0;
        if (data[count] !== null) {
            this.root = new BinaryNode(data[count]);
        }
        var queue = [];
        queue.push(this.root);
        count += 1;
        while (queue.length > 0) {
            var node = queue.shift();
            if ((node === null || node === void 0 ? void 0 : node.left) === null) {
                if (data[count] !== null) {
                    node.left = new BinaryNode(data[count]);
                }
            }
            if (node === null || node === void 0 ? void 0 : node.left) {
                queue.push(node.left);
            }
            count += 1;
            if (count >= data.length)
                return;
            if ((node === null || node === void 0 ? void 0 : node.right) === null) {
                if (data[count] !== null) {
                    node.right = new BinaryNode(data[count]);
                }
            }
            if (node === null || node === void 0 ? void 0 : node.right) {
                queue.push(node.right);
            }
            count += 1;
            if (count >= data.length)
                return;
        }
        return this.root;
    };
    BinaryTree.prototype.levelOrder = function () {
        var queue = [];
        var levels = [];
        queue.push(this.root);
        while (queue.length) {
            var level = [];
            var levelSize = queue.length;
            var count = 0;
            while (count < levelSize) {
                var current = queue.shift();
                count += 1;
                level.push(current === null || current === void 0 ? void 0 : current.value);
                if (current === null || current === void 0 ? void 0 : current.left) {
                    queue.push(current.left);
                }
                if (current === null || current === void 0 ? void 0 : current.right) {
                    queue.push(current.right);
                }
            }
            levels.push(level);
        }
        return levels;
    };
    BinaryTree.prototype._depth = function (node) {
        if (node == null)
            return 0;
        if ((node === null || node === void 0 ? void 0 : node.left) === null && node.right === null)
            return 1;
        var leftDepth = 0;
        var rightDepth = 0;
        if (node.left !== null) {
            leftDepth = this._depth(node.left) + 1;
        }
        if (node.right !== null) {
            rightDepth = this._depth(node.right) + 1;
        }
        return leftDepth > rightDepth ? leftDepth : rightDepth;
    };
    BinaryTree.prototype.depth = function () {
        return this._depth(this.root);
    };
    BinaryTree.prototype._rightSideView = function (node, values, depth) {
        if (node === null) {
            return;
        }
        if (values.length <= depth) {
            values.push(node === null || node === void 0 ? void 0 : node.value);
        }
        if ((node === null || node === void 0 ? void 0 : node.right) != null) {
            this._rightSideView(node.right, values, depth + 1);
        }
        if ((node === null || node === void 0 ? void 0 : node.left) != null) {
            this._rightSideView(node.left, values, depth + 1);
        }
    };
    BinaryTree.prototype.rightSideView = function () {
        var views = [];
        this._rightSideView(this.root, views, 0);
        return views;
    };
    BinaryTree.prototype._leftSideView = function (node, values, depth) {
        if (node === null) {
            return;
        }
        if (values.length <= depth) {
            values.push(node === null || node === void 0 ? void 0 : node.value);
        }
        if ((node === null || node === void 0 ? void 0 : node.left) != null) {
            this._leftSideView(node.left, values, depth + 1);
        }
        if ((node === null || node === void 0 ? void 0 : node.right) != null) {
            this._leftSideView(node.right, values, depth + 1);
        }
    };
    BinaryTree.prototype.leftSideView = function () {
        var views = [];
        this._leftSideView(this.root, views, 0);
        return views;
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
