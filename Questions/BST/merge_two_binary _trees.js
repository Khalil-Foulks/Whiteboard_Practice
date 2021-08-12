var mergeTrees = function(root1, root2) {
    if (root1 === null){
        return root2
    }

    if (root2 === null){
        return root1
    }    

    root1.val += root2.val
    root1.left = mergeTrees(root1.left, root2.left)
    root1.right = mergeTrees(root1.right, root2.right)

    return root1
};

// if root1 is null return root2
// if root2 is null return root1

// pick dominant tree
// increment tree 1 by tree 2
// recursively call merge tree on left side store as dominant tree left
// recursively call merge tree on right side store as dominant tree right
// return dominant tree