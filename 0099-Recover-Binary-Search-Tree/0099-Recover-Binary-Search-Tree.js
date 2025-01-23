function recoverTree(root) {
    let firstNode = null;
    let secondNode = null;
    let prevNode = new TreeNode(-Infinity);
    
    function inorder(node) {
        if (!node) return;
        
        inorder(node.left);
        
        if (firstNode === null && prevNode.val >= node.val) {
            firstNode = prevNode;
        }
        if (firstNode !== null && prevNode.val >= node.val) {
            secondNode = node; 
        }
        
        prevNode = node; 
        
        inorder(node.right);
    }
    
    inorder(root);
    
    if (firstNode && secondNode) {
        [firstNode.val, secondNode.val] = [secondNode.val, firstNode.val];
    }
}