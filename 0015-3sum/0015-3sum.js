function threeSum(nums) {
    // сортируем рас рас
    nums.sort((a, b) => a - b);
  
    const result = [];
  
    for (let i = 0; i < nums.length - 2; i++) {
      // антиповторяшка
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }
  
      let left = i + 1;
      let right = nums.length - 1;
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
  
        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
  
          // еещ одна
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
  
          // идем дальше
          left++;
          right--;
        } else if (sum < 0) {
          // увеличиваем left, чтобы увеличить сумму
          left++;
        } else {
          // уменьшаем right, чтобы уменьшить сумму
          right--;
        }
      }
    }
  
    return result;
  }