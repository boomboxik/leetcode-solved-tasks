function searchMatrix(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    
    let left = 0;
    let right = m * n - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midValue = matrix[Math.floor(mid / n)][mid % n];

        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}