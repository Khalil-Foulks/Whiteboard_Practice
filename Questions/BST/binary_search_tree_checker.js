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