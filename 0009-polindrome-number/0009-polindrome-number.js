/**
 * Using Array:
 * Time O(N) | Space O(N)
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeArray = function(x) {
    const digits = Array.from(String(x), Number);

    for (let i = 0; i < digits.length / 2; i++) {
        if (digits[i] !== digits[digits.length - 1 - i]) {
            return false;
        }
    }

    return true;
};

/**
 * Reverse Integer Using Modulo:
 * Time O(N) | Space O(1)
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;

    const inputX = x;
    let revX = 0;

    while (x > 0) {
        revX = revX * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    return revX === inputX;
};