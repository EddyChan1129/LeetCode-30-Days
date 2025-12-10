
var isAnagram = function(s, t) {
    const sMap = new Map()
    const tMap = new Map()
    if (s.length !== t.length ) return false

    for (let i of s) {
        sMap.set(i, (sMap.get(i) || 0) + 1);
    }

    for (let i of t) {
        tMap.set(i, (tMap.get(i) || 0) + 1);
    }

    for (let [key, value] of sMap) {
        if (tMap.get(key) !== value) {
            return false;
        }
    }
    return true;
};


var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const map = new Map();

    // count s: +1
    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    // count t: -1
    for (let ch of t) {
        if (!map.has(ch)) return false; // t 有 s 無嘅字
        map.set(ch, map.get(ch) - 1);
        if (map.get(ch) < 0) return false; // t 比 s 多
    }

    return true;
};
