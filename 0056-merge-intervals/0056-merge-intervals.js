function merge(intervals) {
    if (intervals.length <= 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);

    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const prev = result[result.length - 1];
        const current = intervals[i];

        if (current[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], current[1]);
        } else {

            result.push(current);
        }
    }

    return result;
}