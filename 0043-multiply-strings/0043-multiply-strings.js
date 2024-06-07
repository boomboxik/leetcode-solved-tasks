function multiply(num1, num2) {
    if (num1 === "0" || num2 === "0") {
        return "0";
    }

    const m = num1.length, n = num2.length;
    const result = new Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const mul = (num1[i] - '0') * (num2[j] - '0');
            const sum = mul + result[i + j + 1];

            result[i + j + 1] = sum % 10; 
            result[i + j] += Math.floor(sum / 10); 
        }
    }

    let resultStr = result.join('');
    while (resultStr[0] === '0') {
        resultStr = resultStr.substring(1);
    }

    return resultStr;
}