// class Node {
//     constructor(value, next=null){
//       this.value = value;
//       this.next = next;
//     }
//   }
  
const has_cycle = function(head) {
    let slow = head,
    fast = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (slow === fast) {
        return true; // found the cycle
        }
    }
  return false;
}