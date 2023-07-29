"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = exports.groupAnagrams = exports.hash = exports.isSubPalindrome = exports.isPalindrome = exports.strip = exports.backspaceCompare = exports.lengthOfLongestSubstringTwoDistinct = exports.lengthOfLongestSubstring = void 0;
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
function lengthOfLongestSubstringTwoDistinct(s) {
    if (s.length <= 1) {
        return s.length;
    }
    var max = 0;
    var p1 = 0;
    var seen = {};
    var _loop_1 = function (p2) {
        var ch = s[p2];
        // if already has two distinct characters in seen, remove the char with smallest position
        var chars = Object.keys(seen);
        if (chars.length === 2 && seen[ch] === undefined) {
            var smallestChar_1 = '';
            var smallest_1 = p2;
            chars.forEach(function (key) {
                if (seen[key] < smallest_1) {
                    smallestChar_1 = key;
                    smallest_1 = seen[key];
                }
            });
            delete seen[smallestChar_1];
            p1 = seen[Object.keys(seen)[0]];
        }
        // update seen char with position if current char is different with previous char
        if (p2 === 0 || ch !== s[p2 - 1]) {
            seen[ch] = p2;
        }
        max = Math.max(max, p2 - p1 + 1);
    };
    for (var p2 = 0; p2 < s.length; p2++) {
        _loop_1(p2);
    }
    return max;
}
exports.lengthOfLongestSubstringTwoDistinct = lengthOfLongestSubstringTwoDistinct;
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
function strip(str) {
    return str.replace(/\d+|\s+|[\?,:]+/g, '').toLowerCase();
}
exports.strip = strip;
function isPalindrome(str) {
    var s = strip(str);
    var p1 = 0;
    var p2 = s.length - 1;
    while (p1 < p2) {
        if (s[p1] !== s[p2]) {
            return false;
        }
        p1 += 1;
        p2 -= 1;
    }
    return true;
}
exports.isPalindrome = isPalindrome;
function _isPalindrome(str, start, end) {
    var p1 = start;
    var p2 = end;
    while (p1 < p2) {
        if (str[p1] !== str[p2]) {
            return false;
        }
        p1 += 1;
        p2 -= 1;
    }
    return true;
}
function isSubPalindrome(str) {
    var s = strip(str);
    var p1 = 0;
    var p2 = s.length - 1;
    while (p1 < p2) {
        if (s[p1] !== s[p2]) {
            if (_isPalindrome(s, p1 + 1, p2) || _isPalindrome(s, p1, p2 - 1)) {
                return true;
            }
            else {
                return false;
            }
        }
        p1 += 1;
        p2 -= 1;
    }
    return true;
}
exports.isSubPalindrome = isSubPalindrome;
var ALPHABET_SIZE = 26;
var ALPHABET_TABLE = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
};
function hash(str) {
    var arr = new Array(ALPHABET_SIZE).fill(0);
    for (var i = 0; i < str.length; i++) {
        arr[ALPHABET_TABLE[str[i]]] += 1;
    }
    return arr.join('#');
}
exports.hash = hash;
function groupAnagrams(strs) {
    var anagrams = {};
    for (var i = 0; i < strs.length; i++) {
        var hashStr = hash(strs[i]);
        if (anagrams[hashStr]) {
            anagrams[hashStr].push(strs[i]);
        }
        else {
            anagrams[hashStr] = [strs[i]];
        }
    }
    return {
        map: anagrams,
        anagrams: Object.values(anagrams),
    };
}
exports.groupAnagrams = groupAnagrams;
function multiply(num1, num2) {
    var nums = new Array(num1.length + num2.length).fill(0);
    for (var i = 0; i < num2.length; i++) {
        var carry = 0;
        var bottomIndex = num2.length - 1 - i;
        for (var j = 0; j < num1.length; j++) {
            var topIndex = num1.length - 1 - j;
            var offset = i + j;
            var result_1 = parseInt(num2[bottomIndex]) * parseInt(num1[topIndex]) + nums[offset] + carry;
            carry = Math.trunc(result_1 / 10);
            nums[offset] = result_1 % 10;
        }
        nums[i + num1.length] += carry;
    }
    var result = [];
    // remove leading 0
    var leading = 1;
    for (var i = nums.length - 1; i >= 0; i--) {
        if (nums[i] !== 0 && leading === 1) {
            result.push(nums[i]);
            leading = 0;
        }
        else if (leading === 0) {
            result.push(nums[i]);
        }
    }
    return result.join('');
}
exports.multiply = multiply;
