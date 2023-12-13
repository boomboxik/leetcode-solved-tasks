/**
 * https://leetcode.com/problems/reverse-integer/
 * Time O(log(x)) | Space O(1)
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    const maxInt = 2 ** 31 - 1;
    const minInt = -(2 ** 31);

    while (x !== 0) {
        const digit = x % 10;

        if (isOutOfBounds(digit, result, maxInt, minInt)) {
            return 0;
        }

        x = Math.trunc(x / 10);
        result = result * 10 + digit;
    }

    return result;
};

const isOutOfBounds = (digit, result, max, min) => {
    const maxDiv = Math.trunc(max / 10);
    const minDiv = Math.trunc(min / 10);

    if (result > maxDiv || (result === maxDiv && digit > max % 10)) {
        return true;
    }

    if (result < minDiv || (result === minDiv && digit < min % 10)) {
        return true;
    }

    return false;
};