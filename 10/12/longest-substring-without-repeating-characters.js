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
