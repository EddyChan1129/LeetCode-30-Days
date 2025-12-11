
var isPalindrome = function(s) {
    let cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    let stringLength = cleaned.length/2

    for (let i=0; i < stringLength; i++){
        if (cleaned[i] != cleaned[cleaned.length - i -1]) {
            return false
        }
    }

    return true
};

var isPalindrome = function(s) {
    let cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let left = 0, right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) return false;
        left++;
        right--;
    }

    return true;
};
