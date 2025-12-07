var containsDuplicate = function(nums) {
    const set = new Set();

    for (let num of nums) {
        let beforeSetSize = set.size
        set.add(num);
        let AfterSetSize = set.size
        if (beforeSetSize === AfterSetSize) return true
    }

    return false;
};