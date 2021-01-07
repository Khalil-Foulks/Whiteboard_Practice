function nodeDepths(root) {
	let ans = []
	sum_helper(root, -1, ans)
	// console.log(ans)
	// console.log(ans.reduce((a,b) => a + b, 0))
  return ans.reduce((a,b) => a + b, 0)
};

function sum_helper(root, total, ans){
	if (root == null){
        return
    };

	let new_total = total + 1	
	ans.push(new_total)
	// # print('total:',ans)
	
	sum_helper(root.left, new_total, ans)
	sum_helper(root.right, new_total, ans)
};


// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
