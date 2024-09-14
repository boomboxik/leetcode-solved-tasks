function minDistance(word1, word2) {
    const len1 = word1.length;
    const len2 = word2.length;

    let dp = Array(len1 + 1).fill(null).map(() => Array(len2 + 1).fill(0));

    for (let i = 0; i <= len1; i++) {
        dp[i][0] = i;  
    }
    for (let j = 0; j <= len2; j++) {
        dp[0][j] = j;  
    }

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j],    // Удаление
                                        dp[i][j - 1],    // Вставка
                                        dp[i - 1][j - 1] // Замена
                );
            }
        }
    }

    return dp[len1][len2];
}