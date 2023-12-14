/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWater = 0; // Максимальное количество воды
    let left = 0;     // Указатель слева
    let right = height.length - 1; // Указатель справа

    // Пока указатели не встретятся
    while (left < right) {
        // Вычисляем текущее количество воды
        const h = Math.min(height[left], height[right]); // Выбираем меньшую высоту
        const w = right - left; // Вычисляем ширину контейнера

        // Обновляем максимальное количество воды, если текущее больше
        maxWater = Math.max(maxWater, h * w);

        // Сдвигаем указатели внутрь массива
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};