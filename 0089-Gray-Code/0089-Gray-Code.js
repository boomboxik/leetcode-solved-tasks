function grayCode(n) {
    let result = [0];
    
    for (let i = 0; i < n; i++) {
        let currentLength = result.length;
        for (let j = currentLength - 1; j >= 0; j--) {
            result.push(result[j] | (1 << i));
        }
    }
    
    return result;
}