function minWindow(s, t) {
    if (t.length > s.length) return "";

    let required = new Map();
    for (let char of t) {
        required.set(char, (required.get(char) || 0) + 1);
    }

    let left = 0, right = 0;
    let formed = 0;
    let windowCounts = new Map();
    let minLength = Infinity, minLeft = 0, minRight = 0;

    while (right < s.length) {
        let char = s[right];
        windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

        if (required.has(char) && windowCounts.get(char) === required.get(char)) {
            formed++;
        }

        while (left <= right && formed === required.size) {
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minLeft = left;
                minRight = right;
            }

            let leftChar = s[left];
            windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);
            if (required.has(leftChar) && windowCounts.get(leftChar) < required.get(leftChar)) {
                formed--;
            }

            left++;
        }

        right++;
    }

    return minLength === Infinity ? "" : s.slice(minLeft, minRight + 1);
}