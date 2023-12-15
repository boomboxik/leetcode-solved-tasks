function romanToInt(s) {
    const romanNumerals = {'I': 1,'V': 5,'X': 10,'L': 50,'C': 100,'D': 500,'M': 1000,};

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const currentSymbol = s[i];
        const currentValue = romanNumerals[currentSymbol];
        const nextSymbol = s[i + 1];
        const nextValue = romanNumerals[nextSymbol];

        if (nextValue > currentValue) {
            result += (nextValue - currentValue);
            i++; //пропускаем следующий символ, мы его уже учли
        } else {
            result += currentValue;
        }
    }

    return result;
}