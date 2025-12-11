/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()
    for (let [i,str] of strs.entries()){
        sortedStr = str.split("").sort().join("")

        if (map.has(sortedStr)){
            map.get(sortedStr).push(i);
        } else {
            map.set(sortedStr, [i])
        }
    }
    //Map(3) { 'aet' => [ 0, 1, 3 ], 'ant' => [ 2, 4 ], 'abt' => [ 5 ] }


    return Array.from(map.values())
            .map(group => group.map(i => strs[i]));


    
};
//Map(3) {
//   'aet' => [ 'eat', 'tea', 'ate' ],
//   'ant' => [ 'tan', 'nat' ],
//   'abt' => [ 'bat' ]
// }

var groupAnagrams = function(strs) {
    const map = new Map();

    for (const str of strs) {
        const key = str.split("").sort().join("");  // 產生 signature，例如 "aet"

        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    return Array.from(map.values());
};
