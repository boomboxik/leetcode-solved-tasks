/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const INT_MAX = 2**31 - 1;
  const INT_MIN = Math.pow(-2, 31);

    // Step 1: Ignore leading whitespaces
    let i = 0;
    while (i < s.length && s[i] === ' ') {
        i++;
    }

    // Step 2: Check for '+' or '-'
    let sign = 1;
    if (i < s.length && (s[i] === '+' || s[i] === '-')) {
        sign = (s[i] === '-') ? -1 : 1;
        i++;
    }

    // Step 3: Read in characters until the next non-digit character or the end of input
    let result = 0;
    while (i < s.length && /\d/.test(s[i])) {
        const digit = parseInt(s[i], 10);

        // Check for overflow before updating result
        if (result > (INT_MAX - digit) / 10) {
            return (sign === 1) ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;
        i++;
    }

    // Step 4: Apply sign
    result *= sign;

    // Step 5: Clamp result to the 32-bit signed integer range
    if (result > INT_MAX) {
        return INT_MAX;
    } else if (result < INT_MIN) {
        return INT_MIN;
    } else {
        return result;
    }
};