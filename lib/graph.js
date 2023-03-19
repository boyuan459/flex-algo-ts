"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;
var Graph = /** @class */ (function () {
    function Graph() {
        this._adjList = [];
    }
    Graph.prototype.create = function (vectors, nodes) {
        this._adjList = new Array(nodes).fill(0).map(function (list) { return []; });
        for (var i = 0; i < vectors.length; i++) {
            var vector = vectors[i];
            var source = vector[0];
            var target = vector[1];
            this._adjList[source].push(target);
        }
    };
    Graph.prototype.adjacentList = function () {
        return this._adjList;
    };
    Graph.prototype._dfs = function (vertex, values, seen) {
        if (seen[vertex]) {
            return;
        }
        seen[vertex] = true;
        values.push(vertex);
        var neighbors = this._adjList[vertex];
        for (var i = 0; i < neighbors.length; i++) {
            var neighbor = neighbors[i];
            this._dfs(neighbor, values, seen);
        }
    };
    Graph.prototype.dfs = function (vertex) {
        var values = [];
        var seen = [];
        this._dfs(vertex, values, seen);
        return values;
    };
    Graph.prototype.bfs = function (vertex) {
        var values = [];
        var seen = [];
        var queue = [];
        queue.push(vertex);
        while (queue.length > 0) {
            var current = queue.shift();
            if (current === undefined) {
                break;
            }
            if (seen[current]) {
                continue;
            }
            values.push(current);
            seen[current] = true;
            var neighbors = this._adjList[current];
            for (var i = 0; i < neighbors.length; i++) {
                var neighbor = neighbors[i];
                queue.push(neighbor);
            }
        }
        return values;
    };
    return Graph;
}());
exports.Graph = Graph;
