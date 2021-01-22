// https://www.algoexpert.io/questions/Branch%20Sums

class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root){
      let ans = []
      sum_helper(root, 0, ans)
      return ans
  }
  
  function sum_helper(node, total, ans){
      if(node === null){
      return
    }
      
      let new_total = total + node.value
      console.log(new_total)
      
      if(!node.left && !node.right){
          ans.push(new_total)
          return
    }
      sum_helper(node.left, new_total, ans)
      sum_helper(node.right, new_total, ans)
  }
