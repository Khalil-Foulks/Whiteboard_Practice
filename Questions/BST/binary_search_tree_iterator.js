var BSTIterator = function(root) {
    // if root doesnt exist return empty array
    if(!root){
        return this.data = [];
    }
    
    // stores visited nodes
    let visited = [];
    
    // inorder traversal; left -> cur -> right
    function traverse(node){
        if(node.left) {
            traverse(node.left);            
        } 
        visited.push(node.val);
        if(node.right){
           traverse(node.right); 
        } 
    }
    
    // initial traversal
    traverse(root);
    // reverses visited for inorder removal
    this.data = visited.reverse();
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    // returns val inorder
    return this.data.pop();
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    // returns true if next val exists; false if last node
    return this.data.length > 0 ;
};


/*  PLAN
    - create visited array to store node vals visited
   - create inorder traversal function 
   - call traverse function for initial run
   - create storage for array reversal of visited array for future popping

   - next function
    - return poppped val from reversed array

   - has next function
    - return whether len of reversed arrat > 0

    time complexity: O(n)
    space complexity: O(1)

    next time complexity: O(1)
    hasnext time complexity: O(1)
*/