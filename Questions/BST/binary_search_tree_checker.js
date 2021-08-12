class BinaryTreeNode {
constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
}

insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
}
}

function isBinarySearchTree(treeRoot) {

// Determine if the tree is a valid binary search tree
return bstCheck(treeRoot, Number.MIN_VALUE, Number.MAX_VALUE)
}

/* Returns true if the given tree is a BST and its values are >= min and <= max. */
function bstCheck(node, min, max){
/* an empty tree is BST */
if(node === null){
    return true
}

/* false if this node violates the min/max constraints */
if(node.value < min || node.value > max){
    console.log(`node:${node.value} min:${min} max:${max}`)
    return false
}
/* otherwise check the subtrees recursively tightening the min/max constraints */
        // Allow only distinct values
return (bstCheck(node.left, min, node.value - 1) && bstCheck(node.right, node.value + 1, max))
}

/* 
    - Make a check helper function
        - check if node is empty
            - if empty return true
        - if node is < min or node > max
            - return false; breaks the rules of a BST 
        - use recursion on left node
            - arguments; left node, lowest possible min, node - 1 
        - use recursion on right node
            - arguments; right node, node + 1, highest possible max
    
    - return helper func in main func
        - params node, min, max
            - initial min lowest min in js
            - initial max is highest max in js

    O(n) time and O(n) space
*/