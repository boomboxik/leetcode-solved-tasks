var mySqrt = function(x) {
    if (x === 0) return 0;

    let result = 0;

    while ((result + 1) * (result + 1) <= x) {
        result++;
    }

    return result;
};