"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lengthOfLongestSubstring = void 0;
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
