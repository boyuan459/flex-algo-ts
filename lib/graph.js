"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;
var Graph = /** @class */ (function () {
    function Graph() {
        this._adjList = [];
        this._indegrees = [];
        this._nodes = 0;
    }
    Graph.prototype.create = function (vectors, nodes) {
        this._adjList = new Array(nodes).fill(0).map(function () { return []; });
        for (var i = 0; i < vectors.length; i++) {
            var vector = vectors[i];
            var source = vector[0];
            var target = vector[1];
            this._adjList[source].push(target);
        }
    };
    Graph.prototype.createInformTimeGraph = function (manager, nodes) {
        this._adjList = new Array(nodes).fill(0).map(function () { return []; });
        for (var i = 0; i < manager.length; i++) {
            if (manager[i] !== -1) {
                this._adjList[manager[i]].push(i);
            }
        }
    };
    Graph.prototype.createCourseGraph = function (courses, numCourses) {
        this._nodes = numCourses;
        this._adjList = new Array(numCourses).fill(0).map(function () { return []; });
        this._indegrees = new Array(numCourses).fill(0);
        for (var i = 0; i < courses.length; i++) {
            var vector = courses[i];
            var target = vector[0];
            var source = vector[1];
            this._adjList[source].push(target);
            this._indegrees[target] += 1;
        }
    };
    Graph.prototype._dfsInformTime = function (vertex, informTime) {
        var neighbors = this._adjList[vertex];
        if (neighbors.length === 0) {
            return informTime[vertex];
        }
        var max = 0;
        for (var i = 0; i < neighbors.length; i++) {
            max = Math.max(max, this._dfsInformTime(neighbors[i], informTime));
        }
        return max + informTime[vertex];
    };
    Graph.prototype.informTime = function (headID, informTime) {
        return this._dfsInformTime(headID, informTime);
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
    Graph.prototype.isAcyclic = function () {
        var queue = [];
        for (var i = 0; i < this._indegrees.length; i++) {
            if (this._indegrees[i] === 0) {
                queue.push(i);
            }
        }
        var count = 0;
        while (queue.length > 0) {
            var vertex = queue.shift();
            count += 1;
            if (vertex === undefined) {
                continue;
            }
            var neighbors = this._adjList[vertex];
            for (var i = 0; i < neighbors.length; i++) {
                var neighbor = neighbors[i];
                this._indegrees[neighbor] -= 1;
                if (this._indegrees[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }
        return count === this._nodes;
    };
    Graph.prototype.indegrees = function () {
        return this._indegrees;
    };
    return Graph;
}());
exports.Graph = Graph;
