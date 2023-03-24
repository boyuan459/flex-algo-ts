"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matrix = void 0;
var DIRECTIONS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];
var Matrix = /** @class */ (function () {
    function Matrix(matrix) {
        this._matrix = matrix;
    }
    Matrix.prototype.sequence = function () {
        var values = [];
        for (var i = 0; i < this._matrix.length; i++) {
            for (var j = 0; j < this._matrix[0].length; j++) {
                values.push(this._matrix[i][j]);
            }
        }
        return values;
    };
    Matrix.prototype._dfs = function (row, col, values, seen) {
        if (row < 0 ||
            row >= this._matrix.length ||
            col < 0 ||
            col >= this._matrix[0].length ||
            seen["".concat(row).concat(col)]) {
            return;
        }
        values.push(this._matrix[row][col]);
        seen["".concat(row).concat(col)] = true;
        for (var i = 0; i < DIRECTIONS.length; i++) {
            var newRow = row + DIRECTIONS[i][0];
            var newCol = col + DIRECTIONS[i][1];
            this._dfs(newRow, newCol, values, seen);
        }
    };
    Matrix.prototype.dfs = function () {
        var values = [];
        var seen = {};
        this._dfs(0, 0, values, seen);
        return values;
    };
    Matrix.prototype.bfs = function () {
        var values = [];
        var seen = {};
        var queue = [[0, 0]];
        while (queue.length > 0) {
            var current = queue.shift();
            if (current === undefined) {
                continue;
            }
            var row = current[0];
            var col = current[1];
            if (row < 0 ||
                row >= this._matrix.length ||
                col < 0 ||
                col >= this._matrix[0].length ||
                seen["".concat(row).concat(col)]) {
                continue;
            }
            values.push(this._matrix[row][col]);
            seen["".concat(row).concat(col)] = true;
            for (var i = 0; i < DIRECTIONS.length; i++) {
                var newRow = row + DIRECTIONS[i][0];
                var newCol = col + DIRECTIONS[i][1];
                queue.push([newRow, newCol]);
            }
        }
        return values;
    };
    Matrix.prototype.matrix = function () {
        return this._matrix;
    };
    return Matrix;
}());
exports.Matrix = Matrix;
