/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var summ = [];
    var result = 0;

    if (nums.length === 1) 
        return nums[0];

    summ[0] = nums[0];
    result = nums[0];

    for (let i = 1; i < nums.length; i++) {

        summ[i] = Math.max(nums[i], summ[i - 1] + nums[i]);
        result = Math.max(result, summ[i]);
    }

    return result;
};
