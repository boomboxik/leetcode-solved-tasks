function permuteUnique(nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    backtrack(nums, [], Array(nums.length).fill(false), result);
    return result;
}

function backtrack(nums, path, used, result) {
    if (path.length === nums.length) {
        result.push([...path]);
        return;
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
            continue;
        }
        path.push(nums[i]);
        used[i] = true;
        backtrack(nums, path, used, result);
        path.pop();
        used[i] = false;
    }
}