function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;
    
    while (left <= right) {
        mid = left + ((right - left) >> 1);
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left; 
}