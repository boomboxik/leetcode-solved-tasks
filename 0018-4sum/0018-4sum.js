function fourSum(nums, target) {
    nums.sort((a, b) => a - b);
    
    const result = [];
    
    function threeSum(start, target) {
        for (let i = start; i < nums.length - 2; i++) {
            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            }
            
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum === target) {
                    result.push([nums[start - 1], nums[i], nums[left], nums[right]]);
                    
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        threeSum(i + 1, target - nums[i]);
    }

    return result;
}