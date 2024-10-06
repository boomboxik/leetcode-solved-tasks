function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;
    let index = 0;

    while (index < heights.length) {

        if (stack.length === 0 || heights[index] >= heights[stack[stack.length - 1]]) {
            stack.push(index++);
        } else {

            const top = stack.pop();
            const area = heights[top] * (stack.length === 0 ? index : index - stack[stack.length - 1] - 1);
            maxArea = Math.max(maxArea, area);
        }
    }

    while (stack.length > 0) {
        const top = stack.pop();
        const area = heights[top] * (stack.length === 0 ? index : index - stack[stack.length - 1] - 1);
        maxArea = Math.max(maxArea, area);
    }

    return maxArea;
}