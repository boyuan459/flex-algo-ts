"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDuplicate = exports.moveZeroes = exports.maxArea = exports.twoSum = void 0;
function twoSum(nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var expect_1 = target - nums[i];
        if (map[expect_1] !== undefined) {
            return [map[expect_1], i];
        }
        map[nums[i]] = i;
    }
    return [-1, -1];
}
exports.twoSum = twoSum;
function maxArea(heights) {
    if (heights.length === 0)
        return 0;
    var max = 0;
    var left = 0;
    var right = heights.length - 1;
    while (left < right) {
        var area = Math.min(heights[left], heights[right]) * (right - left);
        max = Math.max(max, area);
        if (heights[left] < heights[right]) {
            left += 1;
        }
        else {
            right -= 1;
        }
    }
    return max;
}
exports.maxArea = maxArea;
function moveZeroes(nums) {
    var p = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[p] = nums[i];
            p += 1;
        }
    }
    while (p < nums.length) {
        nums[p] = 0;
        p += 1;
    }
}
exports.moveZeroes = moveZeroes;
function findDuplicate(nums) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        if (map[nums[i]] !== undefined) {
            return nums[i];
        }
        else {
            map[nums[i]] = i;
        }
    }
    return -1;
}
exports.findDuplicate = findDuplicate;
