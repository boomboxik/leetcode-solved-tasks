function lengthOfLastWord(s) {
    s = s.trim();

    const words = s.split(' ');

    return words[words.length - 1].length;
}