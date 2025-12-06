// Brute Force 解法 ()Me
var twoSum = function(nums, target) {
    let closeValue = Math.abs(nums[0] + nums[1] - target)
    let twoSumArr = [0,0]

    for (let i=0; i <nums.length; i++){
        for (let y=i+1; y< nums.length; y++){
            if (nums[i] + nums[y] === target ){
                twoSumArr =  [i,y]
                return twoSumArr
            } else if (Math.abs(nums[i] + nums[y]) < closeValue){
                twoSumArr =  [i,y]
            }
        }
    }
    return twoSumArr
};


// Hash Map 解法
var twoSum = function(nums, target) {
    const map = new Map();  // value -> index

    for (let i = 0; i < nums.length; i++) {
        let need = target - nums[i];  // 要找的數字

        if (map.has(need)) {
            console.log("same condition",map)
            return [map.get(need), i]; // 配對成功
        }
        map.set(nums[i], i); // 記住現時數值的 index
        console.log("Set condition",map)
    }
};