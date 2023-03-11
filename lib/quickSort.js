"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort = void 0;
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
