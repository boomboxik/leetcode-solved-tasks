function fullJustify(words, maxWidth) {
    const result = [];
    let currentLine = [];
    let currentLineLength = 0;

    for (const word of words) {
        if (currentLineLength + word.length + currentLine.length > maxWidth) {
            for (let i = 0; i < maxWidth - currentLineLength; i++) {
                currentLine[i % (currentLine.length - 1 || 1)] += ' ';
            }
            result.push(currentLine.join(''));
            currentLine = [];
            currentLineLength = 0;
        }
        currentLine.push(word);
        currentLineLength += word.length;
    }

    const lastLine = currentLine.join(' ');
    result.push(lastLine + ' '.repeat(maxWidth - lastLine.length));

    return result;
}