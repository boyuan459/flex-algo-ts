"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dijkstra = void 0;
var priorityQueue_1 = require("./priorityQueue");
var Dijkstra = /** @class */ (function () {
    function Dijkstra() {
        this._adjList = [[[]]];
        this._nodes = 0;
        this._comparator = function () { return true; };
        this._distances = [];
    }
    Dijkstra.prototype.create = function (times, numNodes) {
        var _this = this;
        this._nodes = numNodes;
        this._adjList = new Array(numNodes).fill(0).map(function () { return []; });
        this._distances = new Array(numNodes).fill(Infinity);
        this._comparator = function (i, j) { return _this._distances[i] < _this._distances[j]; };
        for (var i = 0; i < times.length; i++) {
            var time = times[i];
            var source = time[0];
            var target = time[1];
            var weight = time[2];
            this._adjList[source].push([target, weight]);
        }
    };
    Dijkstra.prototype.shortestPath = function (k) {
        var queue = new priorityQueue_1.PriorityQueue(this._comparator);
        queue.push(k);
        this._distances[k] = 0;
        while (!queue.isEmpty()) {
            var vertex = queue.pop();
            if (vertex !== undefined) {
                var neighbors = this._adjList[vertex];
                for (var i = 0; i < neighbors.length; i++) {
                    var neighbor = neighbors[i];
                    var target = neighbor[0];
                    var weight = neighbor[1];
                    if (this._distances[vertex] + weight < this._distances[target]) {
                        this._distances[target] = this._distances[vertex] + weight;
                        queue.push(target);
                    }
                }
            }
        }
        var max = Math.max.apply(Math, this._distances);
        return max === Infinity ? -1 : max;
    };
    return Dijkstra;
}());
exports.Dijkstra = Dijkstra;
