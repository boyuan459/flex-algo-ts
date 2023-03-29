"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backspaceCompare = exports.lengthOfLongestSubstring = void 0;
function lengthOfLongestSubstring(s) {
    if (s.length === 0) {
        return 0;
    }
    var p1 = 0;
    var map = {};
    var max = 0;
    for (var p2 = 0; p2 < s.length; p2++) {
        var char = s[p2];
        if (map[char] >= p1) {
            p1 = map[char] + 1;
        }
        map[char] = p2;
        var length_1 = p2 - p1 + 1;
        max = Math.max(max, length_1);
    }
    return max;
}
exports.lengthOfLongestSubstring = lengthOfLongestSubstring;
function backspaceCompare(source, target) {
    var p1 = source.length - 1;
    var p2 = target.length - 1;
    while (p1 >= 0 && p2 >= 0) {
        if (source[p1] === '#') {
            // backspace
            var backtrace = 2;
            while (backtrace > 0) {
                p1 -= 1;
                backtrace -= 1;
                if (source[p1] === '#') {
                    backtrace += 2;
                }
            }
        }
        if (target[p2] === '#') {
            // backspace
            var backtrace = 2;
            while (backtrace > 0) {
                p2 -= 1;
                backtrace -= 1;
                if (source[p2] === '#') {
                    backtrace += 2;
                }
            }
        }
        if (source[p1] !== target[p2]) {
            return false;
        }
        p1 -= 1;
        p2 -= 1;
    }
    return p1 === p2;
}
exports.backspaceCompare = backspaceCompare;
