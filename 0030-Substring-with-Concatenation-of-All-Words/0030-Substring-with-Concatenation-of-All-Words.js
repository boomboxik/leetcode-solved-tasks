function findSubstring(s, words) {
    
    if (s.length === 0 || words.length === 0) return [];
    
    const wordLength = words[0].length;
    const totalLength = words.length * wordLength;
    const wordMap = {};
    const result = [];
    
    for (let word of words) {
        if (!wordMap[word]) wordMap[word] = 0;
        wordMap[word]++;
    }
    
    for (let i = 0; i <= s.length - totalLength; i++) {
        const substr = s.substr(i, totalLength);
        const substrMap = {};
        let j;
        for (j = 0; j < substr.length; j += wordLength) {
            const word = substr.substr(j, wordLength);
            if (!wordMap[word]) break;
            if (!substrMap[word]) substrMap[word] = 0;
            substrMap[word]++;
            if (substrMap[word] > wordMap[word]) break;
        }
        if (j === totalLength) result.push(i);
    }
    
    return result;
}