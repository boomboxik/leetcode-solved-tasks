var findMedianSortedArrays = function (nums1, nums2) {
    // Ща решим туда сюда или норм
    const canSwap = nums2.length < nums1.length;
    if (canSwap) [nums1, nums2] = [nums2, nums1];

    let [left, right] = [0, nums1.length - 1];
    const totalLength = nums1.length + nums2.length;
    const mid = totalLength >> 1; // где там середина
    const isEven = totalLength % 2 === 0; // Проверка на четкость

    // Поиск по мелкому (nums1)
    while (true) {
        const mid1 = left + right; // Разделение nums1
        const mid2 = mid - mid1 - 2; // Разделение nums2
        const { aLeft, aRight, bLeft, bRight } = getPointers(nums1, mid1, nums2, mid2);

        // Зырим, является ли текущее разделение целью
        const isTarget = aLeft <= bRight && bLeft <= aRight;
        if (isTarget)
            return isEven
                ? (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2
                : Math.min(aRight, bRight);

        // Обновление границ поиска в зависимости от того, где находится цель
        const isAOnLeft = aLeft <= bRight;
        if (isAOnLeft) left = mid1 + 1;

        const isBOnLeft = bRight < aLeft;
        if (isBOnLeft) right = mid1 - 1;
    }
};

// опа почти все
const getPointers = (nums1, mid1, nums2, mid2) => {
    const getLeft = (nums, index) => (0 <= index ? nums[index] : -Infinity);
    const [aLeft, bLeft] = [getLeft(nums1, mid1), getLeft(nums2, mid2)];

    const getRight = (nums, index) => (index + 1 < nums.length ? nums[index + 1] : Infinity);
    const [aRight, bRight] = [getRight(nums1, mid1), getRight(nums2, mid2)];

    return { aLeft, aRight, bLeft, bRight };
};