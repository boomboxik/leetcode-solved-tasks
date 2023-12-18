function threeSumClosest(nums, target) {
    // Сортируем массив для удобства работы с указателями
    nums.sort((a, b) => a - b);
    
    // Инициализируем переменные для хранения ближайшей суммы и её разницы с целью
    let closestSum = nums[0] + nums[1] + nums[2];
    let closestDiff = Math.abs(closestSum - target);
  
    // Итерируем по массиву
    for (let i = 0; i < nums.length - 2; i++) {
      // Устанавливаем два указателя - left и right
      let left = i + 1;
      let right = nums.length - 1;
  
      while (left < right) {
        // Вычисляем текущую сумму
        const currentSum = nums[i] + nums[left] + nums[right];
        
        // Вычисляем разницу между текущей суммой и целью
        const currentDiff = Math.abs(currentSum - target);
  
        // Проверяем, является ли текущая сумма ближе к цели, чем предыдущая найденная
        if (currentDiff < closestDiff) {
          closestSum = currentSum;
          closestDiff = currentDiff;
        }
  
        // Двигаем указатели в зависимости от того, больше или меньше текущая сумма цели
        if (currentSum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  
    return closestSum;
  }