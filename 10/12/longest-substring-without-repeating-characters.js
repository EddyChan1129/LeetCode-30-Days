/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let sArr = s.split("");
    let biggestNumber = 0;
    const arr = [];

    for (let ch of sArr) {
        while (arr.includes(ch)) {
            arr.shift();
        }
        arr.push(ch);
        if (arr.length > biggestNumber) {
            biggestNumber = arr.length;
        }
    }

    return biggestNumber;
};


// better vsersion without using array
var lengthOfLongestSubstring = function(s) {
    const set = new Set();  // 存住當前 window 入面嘅字
    let left = 0;           // window 左邊 index
    let maxLen = 0;         // 最長長度

    for (let right = 0; right < s.length; right++) {
        const ch = s[right];

        // 如果 set 已經有呢個字，就收窄左邊個 window
        while (set.has(ch)) {
            set.delete(s[left]);
            left++;
        }

        set.add(ch);  // 加入新字
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
