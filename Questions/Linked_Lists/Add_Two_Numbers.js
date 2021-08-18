/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    // make pointers
    let p1 = l1
    let p2 = l2
    
    // run as long as both nodes exists
    while(p1 || p2){
        let sumTotal = p1.val + p2.val
        let remainder = sumTotal % 10
        let carry = Math.floor(sumTotal / 10)
        // console.log(`total:${sumTotal} rem:${remainder} carry:${carry}`)

        // if there is no LL1 node to add to LL2 node make one
        if(!(p1.next) && p2.next){
             p1.next = ListNode(0)
        }
        // if there is no LL2 node to add to LL1 node make one
        if(!(p2.next) && p1.next){
            p2.next = ListNode(0)
        }

        // as long as total < 10 set as new val
        if(sumTotal < 10){
            p1.val = sumTotal
        } 
        // otherwise use the remainder
        else {
            p1.val = remainder
            // if there is a next node add carry to the node's val
            if(p1.next){
               p1.next.val += carry 
            }
            // if carry exists and there is no next node, make one using carry; return cause l2 no longer exists
            if(!(p1.next) && carry > 0){
                p1.next = ListNode(carry)
                return l1   
            }
        }            
        // traverse LL1 and LL2
        p1 = p1.next
        p2 = p2.next
    }
    // return new summed LL1
    return l1
};