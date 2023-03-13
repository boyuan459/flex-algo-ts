"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSelect = exports.quickSelectPivot = exports.quickSort = exports.pivot = void 0;
function swap(data, i, j) {
    var temp = data[i];
    data[i] = data[j];
    data[j] = temp;
}
function pivot(data, left, right) {
    var p = left;
    for (var i = left + 1; i <= right; i++) {
        if (data[p] > data[i]) {
            swap(data, p + 1, i);
            swap(data, p, p + 1);
            p += 1;
        }
    }
    return p;
}
exports.pivot = pivot;
function _quickSort(data, left, right) {
    if (left >= right)
        return;
    var p = pivot(data, left, right);
    _quickSort(data, left, p - 1);
    _quickSort(data, p + 1, right);
}
function quickSort(data) {
    _quickSort(data, 0, data.length - 1);
}
exports.quickSort = quickSort;
function quickSelectPivot(data, left, right) {
    var p = right;
    for (var i = right - 1; i >= left; i--) {
        if (data[p] < data[i]) {
            swap(data, p - 1, i);
            swap(data, p - 1, p);
            p -= 1;
        }
    }
    return p;
}
exports.quickSelectPivot = quickSelectPivot;
function _quickSelect(data, left, right, index) {
    var p = quickSelectPivot(data, left, right);
    if (p === index) {
        return data[p];
    }
    else if (p < index) {
        return _quickSelect(data, p + 1, right, index);
    }
    else {
        return _quickSelect(data, left, p - 1, index);
    }
}
// 1th index: data.length - 1
// 2th index: data.length - 2
// kth index: data.length - k
function quickSelect(data, kth) {
    return _quickSelect(data, 0, data.length - 1, data.length - kth);
}
exports.quickSelect = quickSelect;
