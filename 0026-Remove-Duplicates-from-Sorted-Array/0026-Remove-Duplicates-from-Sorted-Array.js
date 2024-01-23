var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let uniqueArray = [nums[0]]; // Создаем новый массив и добавляем первый элемент

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            uniqueArray.push(nums[i]);
        }
    }

    // Копируем уникальные элементы обратно в оригинальный массив
    for (let i = 0; i < uniqueArray.length; i++) {
        nums[i] = uniqueArray[i];
    }

    return uniqueArray.length;
};