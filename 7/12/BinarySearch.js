var search = function(nums, target) {
    for (let i=0; i <nums.length;i++){
        if (nums[i] === target) {
            return i
        } 
    }
    return -1
};



var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const value = nums[mid];

        if (value === target) {
            return mid;                // 搵到
        } else if (value < target) {
            left = mid + 1;            // 去右邊搵
        } else {
            right = mid - 1;           // 去左邊搵
        }
    }

    return -1; // 搵唔到
};
