"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BST = void 0;
var BinaryNode = /** @class */ (function () {
    function BinaryNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return BinaryNode;
}());
var BST = /** @class */ (function () {
    function BST() {
        this.root = null;
    }
    BST.prototype._insertSingleNode = function (node, data) {
        if (node === null) {
            return;
        }
        if ((node === null || node === void 0 ? void 0 : node.value) > data) {
            if (node.left === null) {
                node.left = new BinaryNode(data);
            }
            else {
                this._insertSingleNode(node.left, data);
            }
        }
        else {
            if (node.right === null) {
                node.right = new BinaryNode(data);
            }
            else {
                this._insertSingleNode(node.right, data);
            }
        }
    };
    BST.prototype.insertSingleNode = function (data) {
        if (this.root === null) {
            this.root = new BinaryNode(data);
            return;
        }
        this._insertSingleNode(this.root, data);
    };
    BST.prototype.insert = function (data) {
        if (typeof data === 'number') {
            // single node insert
            this.insertSingleNode(data);
        }
        else {
            // array insert
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var val = data_1[_i];
                this.insertSingleNode(val);
            }
        }
    };
    BST.prototype.levelOrder = function () {
        if (this.root === null) {
            return [[]];
        }
        var levels = [];
        var queue = [];
        queue.push(this.root);
        while (queue.length > 0) {
            var level = [];
            var levelSize = queue.length;
            var count = 0;
            while (count < levelSize) {
                var current = queue.shift();
                level.push(current === null || current === void 0 ? void 0 : current.value);
                if ((current === null || current === void 0 ? void 0 : current.left) != null) {
                    queue.push(current === null || current === void 0 ? void 0 : current.left);
                }
                if ((current === null || current === void 0 ? void 0 : current.right) != null) {
                    queue.push(current === null || current === void 0 ? void 0 : current.right);
                }
                count += 1;
            }
            levels.push(level);
        }
        return levels;
    };
    BST.prototype._depth = function (node) {
        if (node === null) {
            return 0;
        }
        if (node.left === null && node.right === null) {
            return 1;
        }
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
    BST.prototype.depth = function () {
        return this._depth(this.root);
    };
    BST.prototype._rightSideView = function (node, views, depth) {
        if (node === null) {
            return;
        }
        if (views.length <= depth) {
            views.push(node.value);
        }
        if (node.right !== null) {
            this._rightSideView(node.right, views, depth + 1);
        }
        if (node.left !== null) {
            this._rightSideView(node.left, views, depth + 1);
        }
    };
    BST.prototype.rightSideView = function () {
        var views = [];
        this._rightSideView(this.root, views, 0);
        return views;
    };
    BST.prototype._leftSideView = function (node, views, depth) {
        if (node === null) {
            return;
        }
        if (views.length <= depth) {
            views.push(node.value);
        }
        if (node.left != null) {
            this._leftSideView(node.left, views, depth + 1);
        }
        if (node.right != null) {
            this._leftSideView(node.right, views, depth + 1);
        }
    };
    BST.prototype.leftSideView = function () {
        var views = [];
        this._leftSideView(this.root, views, 0);
        return views;
    };
    BST.prototype._isValid = function (node, min, max) {
        if (node === null)
            return true;
        if ((node === null || node === void 0 ? void 0 : node.value) <= min || (node === null || node === void 0 ? void 0 : node.value) >= max) {
            return false;
        }
        if (!this._isValid(node.left, min, node.value)) {
            return false;
        }
        if (!this._isValid(node.right, node.value, max)) {
            return false;
        }
        return true;
    };
    BST.prototype.isValid = function () {
        return this._isValid(this.root, -Infinity, Infinity);
    };
    return BST;
}());
exports.BST = BST;
