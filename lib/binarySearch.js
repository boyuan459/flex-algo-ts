"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = void 0;
function binarySearch(data, target) {
    if (data.length === 0)
        return -1;
    var left = 0;
    var right = data.length - 1;
    while (left <= right) {
        var mid = (left + right) / 2;
        if (data[mid] === target) {
            return mid;
        }
        else if (data[mid] > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return -1;
}
exports.binarySearch = binarySearch;
