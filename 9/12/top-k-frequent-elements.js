
var topKFrequent = function(nums, k) {
    const map = new Map()
    const result = []
    for (let i of nums) {
        map.set(i, (map.get(i)||0) +1 )
    }
    const sortedArr = [...map].sort((a,b)=>  b[1] - a[1])
    for (let i=0; i<k ; i++){
        result.push(sortedArr[i][0])
    }
    return result
};