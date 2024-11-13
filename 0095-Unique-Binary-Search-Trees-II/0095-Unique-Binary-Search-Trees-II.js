class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function generateTrees(n) {
    if (n === 0) return [];

    function buildTrees(start, end) {
        const allTrees = [];
        
        if (start > end) {
            allTrees.push(null);
            return allTrees;
        }
        
        for (let i = start; i <= end; i++) {
            const leftTrees = buildTrees(start, i - 1);
            const rightTrees = buildTrees(i + 1, end);
            
            for (let left of leftTrees) {
                for (let right of rightTrees) {
                    const root = new TreeNode(i);
                    root.left = left;
                    root.right = right;
                    allTrees.push(root);
                }
            }
        }
        
        return allTrees;
    }
    
    return buildTrees(1, n);
}