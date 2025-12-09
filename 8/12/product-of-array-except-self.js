
// [1,2,3,4] -> [1,1,2,6] -> [24(1*2*3*4) 12(1*3*4) 8(2*4) 6(6*1)]

var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = [];

    // 1. 左邊乘積（prefix）
    answer[0] = 1;
    for (let i = 1; i < n; i++) { 
        answer[i] = answer[i - 1] * nums[i - 1];
    }
    // 2. 右邊乘積（suffix），用 right 變數
    let right = 1;
    for (let i = n - 1; i >= 0; i--) { 
        answer[i] *= right;
        right *= nums[i];
    }
    return answer;
};
