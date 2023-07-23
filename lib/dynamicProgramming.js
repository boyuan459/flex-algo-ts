"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxSubArray = exports.longestPalindrome = void 0;
function longestPalindrome(s) {
    var len = s.length;
    var dp = new Array(len).fill(0).map(function () { return new Array(len).fill(false); });
    var answers = [0, 0];
    // diff = 0
    for (var i = 0; i < len; i++) {
        dp[i][i] = true;
        answers = [i, i];
    }
    // diff = 1
    for (var i = 0; i < len - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            answers = [i, i + 1];
        }
    }
    // diff >= 2
    for (var diff = 2; diff < len; diff++) {
        for (var i = 0; i < len - diff; i++) {
            var j = i + diff;
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                answers = [i, j];
            }
        }
    }
    return {
        dp: dp,
        answers: answers,
        longestPalindromeSubstring: s.substring(answers[0], answers[1] + 1),
    };
}
exports.longestPalindrome = longestPalindrome;
function maxSubArray(nums) {
    var currentArr = [0];
    var maxArr = [0];
    var current = nums[0];
    var max = nums[0];
    for (var i = 1; i < nums.length; i++) {
        var num = nums[i];
        if (num + current > num) {
            current = num + current;
            currentArr.push(i);
        }
        else {
            current = num;
            currentArr = [i];
        }
        if (current > max) {
            max = current;
            maxArr = currentArr.map(function (item) { return item; });
        }
    }
    return {
        max: max,
        maxArray: maxArr,
    };
}
exports.maxSubArray = maxSubArray;
