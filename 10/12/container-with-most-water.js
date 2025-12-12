var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let max = 0

    while (left < right){
        let h = Math.min(height[left],height[right])
        let w = right - left
        max = Math.max(max, h*w)
        height[left] < height[right] ? left++ : right--
    }

    return max
    
};