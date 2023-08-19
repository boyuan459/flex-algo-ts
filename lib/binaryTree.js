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
        if (node === null)
            return 0;
        var ld = this._depth(node === null || node === void 0 ? void 0 : node.left);
        var rd = this._depth(node === null || node === void 0 ? void 0 : node.right);
        var dp = Math.max(ld, rd);
        dp += 1;
        return dp;
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
    BinaryTree.prototype._height = function (node) {
        if (node === null) {
            return 0;
        }
        if ((node === null || node === void 0 ? void 0 : node.left) === null) {
            return 1;
        }
        return this._height(node === null || node === void 0 ? void 0 : node.left) + 1;
    };
    BinaryTree.prototype.height = function () {
        return this._height(this.root) - 1;
    };
    BinaryTree.prototype._nodeExists = function (idxToFind, height) {
        var left = 0;
        var right = Math.pow(2, height) - 1;
        var level = 0;
        var current = this.root;
        while (level < height) {
            var mid = Math.ceil((left + right) / 2);
            if (idxToFind >= mid) {
                current = current === null || current === void 0 ? void 0 : current.right;
                left = mid;
            }
            else {
                current = current === null || current === void 0 ? void 0 : current.left;
                right = mid;
            }
            level += 1;
        }
        return current !== null;
    };
    BinaryTree.prototype.countCompleteTreeNodes = function () {
        var height = this.height();
        var upperCount = Math.pow(2, height) - 1;
        var left = 0;
        var right = upperCount;
        while (left < right) {
            var mid = Math.ceil((left + right) / 2);
            if (this._nodeExists(mid, height)) {
                left = mid;
            }
            else {
                right = mid - 1;
            }
        }
        return upperCount + left + 1;
    };
    BinaryTree.prototype._diameter = function (node, max) {
        if (node === null)
            return 0;
        var ld = this._diameter(node === null || node === void 0 ? void 0 : node.left, max);
        var rd = this._diameter(node === null || node === void 0 ? void 0 : node.right, max);
        if (ld + rd > max.value) {
            max.value = ld + rd;
        }
        var depth = Math.max(ld, rd);
        depth += 1;
        return depth;
    };
    BinaryTree.prototype.diameter = function () {
        var max = { value: 0 };
        this._diameter(this.root, max);
        return max.value;
    };
    BinaryTree.prototype.maxWidth = function () {
        var _a, _b;
        if (this.root === null)
            return 0;
        var max = 0;
        var queue = [{ node: this.root, index: 0 }];
        while (queue.length) {
            var levelSize = queue.length;
            var count = 0;
            var startIndex = undefined;
            while (count < levelSize) {
                var current = queue.shift();
                if (startIndex === undefined) {
                    startIndex = current === null || current === void 0 ? void 0 : current.index;
                }
                var distance = (current === null || current === void 0 ? void 0 : current.index) - startIndex;
                max = Math.max(max, distance + 1);
                if ((_a = current === null || current === void 0 ? void 0 : current.node) === null || _a === void 0 ? void 0 : _a.left) {
                    queue.push({ node: current.node.left, index: distance * 2 });
                }
                if ((_b = current === null || current === void 0 ? void 0 : current.node) === null || _b === void 0 ? void 0 : _b.right) {
                    queue.push({ node: current.node.right, index: distance * 2 + 1 });
                }
                count += 1;
            }
        }
        return max;
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
