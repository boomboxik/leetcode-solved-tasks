function searchRange(nums, target) {
    // Функция для поиска начальной и конечной позиции элемента
    function binarySearch(nums, target, isFirst) {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                result = mid;
                if (isFirst) {
                    // Если ищем первое вхождение, сдвигаемся влево
                    right = mid - 1;
                } else {
                    // Если ищем последнее вхождение, сдвигаемся вправо
                    left = mid + 1;
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    // Находим начальную и конечную позицию элемента
    const firstPos = binarySearch(nums, target, true);
    const lastPos = binarySearch(nums, target, false);

    return [firstPos, lastPos];
}