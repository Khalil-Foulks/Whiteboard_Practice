/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

let getIntersectionNode = function(headA, headB) {
    let pointerA = headA
    let pointerB = headB
    
    /**
        if nodeA != nodeB
        traverse both LL 
        when a pointer is null move to opposite LL 
        which causes next traversal to put both pointers on same LL length starting point
        return intersection
    */ 
    while(pointerA != pointerB){
        if(pointerA === null){
           pointerA = headB
        } else{
            pointerA = pointerA.next
        }
        
        if(pointerB === null){
            pointerB = headA
        } else{
            pointerB = pointerB.next
        }
    }
    return pointerA
};

/* 
    where N is the length of list A and M is the length of list B.
    time - O(N + M)
    space - O(1)
*/
