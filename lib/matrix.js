"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WallsAndGates = exports.Orange = exports.Matrix = void 0;
var DIRECTIONS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];
var Orange;
(function (Orange) {
    Orange[Orange["EMPTY"] = 0] = "EMPTY";
    Orange[Orange["FRESH"] = 1] = "FRESH";
    Orange[Orange["ROT"] = 2] = "ROT";
})(Orange || (Orange = {}));
exports.Orange = Orange;
var WallsAndGates;
(function (WallsAndGates) {
    WallsAndGates[WallsAndGates["WALL"] = -1] = "WALL";
    WallsAndGates[WallsAndGates["GATE"] = 0] = "GATE";
    WallsAndGates[WallsAndGates["EMPTY"] = Infinity] = "EMPTY";
})(WallsAndGates || (WallsAndGates = {}));
exports.WallsAndGates = WallsAndGates;
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
    Object.defineProperty(Matrix.prototype, "matrix", {
        get: function () {
            return this._matrix;
        },
        enumerable: false,
        configurable: true
    });
    Matrix.prototype.numIslands = function () {
        var count = 0;
        for (var i = 0; i < this._matrix.length; i++) {
            for (var j = 0; j < this._matrix[0].length; j++) {
                if (this._matrix[i][j] === '1') {
                    count += 1;
                    var queue = [];
                    queue.push([i, j]);
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
                            this._matrix[row][col] === '0') {
                            continue;
                        }
                        this._matrix[row][col] = '0';
                        for (var i_1 = 0; i_1 < DIRECTIONS.length; i_1++) {
                            var newRow = DIRECTIONS[i_1][0] + row;
                            var newCol = DIRECTIONS[i_1][1] + col;
                            queue.push([newRow, newCol]);
                        }
                    }
                }
            }
        }
        return count;
    };
    Matrix.prototype.orangesRotting = function () {
        var queue = [];
        var numFresh = 0;
        var minutes = -1;
        var seen = {};
        for (var i = 0; i < this._matrix.length; i++) {
            for (var j = 0; j < this._matrix[0].length; j++) {
                if (this._matrix[i][j] === Orange.ROT) {
                    queue.push([i, j]);
                }
                else if (this._matrix[i][j] === Orange.FRESH) {
                    numFresh += 1;
                }
            }
        }
        while (queue.length > 0 && numFresh > 0) {
            var levelSize = queue.length;
            minutes += 1;
            var count = 0;
            while (count < levelSize) {
                count += 1;
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
                    this._matrix[row][col] === Orange.EMPTY ||
                    seen["".concat(row, "-").concat(col)]) {
                    continue;
                }
                if (this._matrix[row][col] === Orange.FRESH) {
                    numFresh -= 1;
                }
                this._matrix[row][col] = Orange.ROT;
                seen["".concat(row, "-").concat(col)] = true;
                for (var i = 0; i < DIRECTIONS.length; i++) {
                    var newRow = row + DIRECTIONS[i][0];
                    var newCol = col + DIRECTIONS[i][1];
                    queue.push([newRow, newCol]);
                }
            }
        }
        return numFresh === 0 ? minutes : -1;
    };
    Matrix.prototype._dfsWallsAndGates = function (row, col, depth) {
        if (row < 0 ||
            row >= this._matrix.length ||
            col < 0 ||
            col >= this._matrix[0].length ||
            this._matrix[row][col] === WallsAndGates.WALL ||
            this._matrix[row][col] < depth) {
            return;
        }
        this._matrix[row][col] = depth;
        for (var i = 0; i < DIRECTIONS.length; i++) {
            var newRow = row + DIRECTIONS[i][0];
            var newCol = col + DIRECTIONS[i][1];
            this._dfsWallsAndGates(newRow, newCol, depth + 1);
        }
    };
    Matrix.prototype.wallsAndGates = function () {
        for (var i = 0; i < this._matrix.length; i++) {
            for (var j = 0; j < this._matrix[0].length; j++) {
                if (this._matrix[i][j] === WallsAndGates.GATE) {
                    this._dfsWallsAndGates(i, j, 0);
                }
            }
        }
    };
    return Matrix;
}());
exports.Matrix = Matrix;
