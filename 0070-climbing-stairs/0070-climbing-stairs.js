function climbStairs(n) {
    if (n <= 2) return n;
    
    let prev = 2;
    let beforePrev = 1;
    let current = 0;

    for (let i = 3; i <= n; i++) {
        current = prev + beforePrev;
        beforePrev = prev;
        prev = current;
    }

    return current;
}