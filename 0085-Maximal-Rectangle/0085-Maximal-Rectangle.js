function maximalRectangle(matrix) {
    if (matrix.length === 0) return 0;
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    let maxArea = 0;
    
    const heights = new Array(cols).fill(0);
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
        }
        
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }
    
    return maxArea;
}

function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;
    heights.push(0); 
    
    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            const h = heights[stack.pop()];
            const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, h * w);
        }
        stack.push(i);
    }
    
    heights.pop();
    return maxArea;
}