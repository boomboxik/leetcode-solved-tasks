function nextPermutation(nums) {
    // Находим индекс, где текущее число меньше следующего
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    
    // Если такой индекс найден
    if (i >= 0) {
        // Находим наименьшее число справа от текущего числа, но большее текущего числа
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        // Меняем их местами
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    // Переворачиваем все числа справа от текущего индекса
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}