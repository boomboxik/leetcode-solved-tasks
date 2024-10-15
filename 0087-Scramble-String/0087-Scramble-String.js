function isScramble(s1, s2) {
    const n = s1.length;
    
    if (n !== s2.length) return false;
    
    if (s1 === s2) return true;

    const charCount = (str) => {
        const count = Array(26).fill(0);
        for (let i = 0; i < str.length; i++) {
            count[str.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }
        return count.join('');
    };

    if (charCount(s1) !== charCount(s2)) return false;

    const memo = {};

    const scramble = (s1, s2) => {
        const key = `${s1}-${s2}`;
        if (key in memo) return memo[key];
        
        if (s1 === s2) {
            memo[key] = true;
            return true;
        }

        const n = s1.length;

        for (let i = 1; i < n; i++) {

            if (scramble(s1.substring(0, i), s2.substring(0, i)) &&
                scramble(s1.substring(i), s2.substring(i))) {
                memo[key] = true;
                return true;
            }

            if (scramble(s1.substring(0, i), s2.substring(n - i)) &&
                scramble(s1.substring(i), s2.substring(0, n - i))) {
                memo[key] = true;
                return true;
            }
        }

        memo[key] = false;
        return false;
    };

    return scramble(s1, s2);
}