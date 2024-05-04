function divide(dividend, divisor) {

    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647
    }
    
    const isNegative = (dividend < 0) ^ (divisor < 0)
    
    let absDividend = Math.abs(dividend)
    const absDivisor = Math.abs(divisor)
    
    let quotient = 0
    
    while (absDividend >= absDivisor) {
        let tempDivisor = absDivisor;
        let multiple = 1
        
        while (absDividend >= (tempDivisor << 1) && (tempDivisor << 1) > 0) {
            tempDivisor <<= 1;
            multiple <<= 1
        }
        
        absDividend -= tempDivisor
        quotient += multiple
    }
    
    return isNegative ? -quotient : quotient
}