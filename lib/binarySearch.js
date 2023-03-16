"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRange = exports.binarySearchRange = exports.binarySearch = void 0;
function binarySearch(data, target) {
    if (data.length === 0)
        return -1;
    var left = 0;
    var right = data.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
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
function binarySearchRange(data, target, start, end) {
    if (data.length === 0)
        return -1;
    var left = start;
    var right = end;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
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
exports.binarySearchRange = binarySearchRange;
function searchRange(data, target) {
    if (data.length === 0)
        return [-1, -1];
    var index = binarySearch(data, target);
    if (index === -1)
        return [-1, -1];
    var startIndex = index;
    var findIndex = index;
    // find start index
    while (findIndex !== -1) {
        startIndex = findIndex;
        findIndex = binarySearchRange(data, target, 0, findIndex - 1);
    }
    // find end index
    var endIndex = index;
    findIndex = index;
    while (findIndex !== -1) {
        endIndex = findIndex;
        findIndex = binarySearchRange(data, target, findIndex + 1, data.length - 1);
    }
    return [startIndex, endIndex];
}
exports.searchRange = searchRange;
