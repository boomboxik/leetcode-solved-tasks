function permute(nums) {
    const result = [];
    const queue = [[]];
    
    while (queue.length > 0) {
        const current = queue.shift();
        
        if (current.length === nums.length) {
            result.push(current);
        } else {
            for (let i = 0; i < nums.length; i++) {
                if (!current.includes(nums[i])) {
                    const newPermutation = [...current, nums[i]];
                    queue.push(newPermutation);
                }
            }
        }
    }
    
    return result;
}