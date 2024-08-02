/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const result = Array.from({ length: n }, () => Array(n).fill(0));
    let left = 0, right = n - 1;
    let top = 0, bottom = n - 1;
    let num = 1;

    while (left <= right && top <= bottom) {

        for (let i = left; i <= right; i++) {
            result[top][i] = num;
            num++;
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            result[i][right] = num;
            num++;
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result[bottom][i] = num;
                num++;
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result[i][left] = num;
                num++;
            }
            left++;
        }
    }

    return result;
};