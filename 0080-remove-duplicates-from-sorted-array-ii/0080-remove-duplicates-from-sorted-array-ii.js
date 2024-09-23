/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {

        if (i === 0 || nums[i] !== nums[i - 1]) {
            count = 1; 
        } else if (count < 2) {
            count++; 
        } else {
            continue; 
        }
        
        nums[k] = nums[i];
        k++; 
    }
    
    return k; 
};