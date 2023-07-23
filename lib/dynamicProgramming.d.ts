export type LongestPalindromeResult = {
    dp: boolean[][];
    answers: number[];
    longestPalindromeSubstring: string;
};
export declare function longestPalindrome(s: string): LongestPalindromeResult;
export type MaxSubArrayResult = {
    max: number;
    maxArray: number[];
};
export declare function maxSubArray(nums: number[]): MaxSubArrayResult;
