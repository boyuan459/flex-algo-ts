"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSortedArray = void 0;
function mergeSortedArray(nums1, m, nums2, n) {
    var resultCount = nums1.length - 1;
    var nums1Count = m - 1;
    var nums2Count = n - 1;
    while (nums1Count >= 0 && nums2Count >= 0) {
        if (nums1[nums1Count] > nums2[nums2Count]) {
            nums1[resultCount] = nums1[nums1Count];
            nums1Count -= 1;
        }
        else {
            nums1[resultCount] = nums2[nums2Count];
            nums2Count -= 1;
        }
        resultCount -= 1;
    }
    while (nums2Count >= 0) {
        nums1[resultCount] = nums2[nums2Count];
        resultCount -= 1;
        nums2Count -= 1;
    }
}
exports.mergeSortedArray = mergeSortedArray;
