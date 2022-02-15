var copyRandomList = function(head) {
    if (head == null) {
        return null;
    }
    let temp = head;
    // first set the next pointers
    while (temp !== null) {
        let newNode = new Node(temp.val);
        newNode.next = temp.next;
        temp.next = newNode;
        temp = newNode.next;
    }
    // set the random pointers now
    temp = head;
    while (temp !== null) {
        temp.next.random = temp.random ? temp.random.next : null;
        temp = temp.next.next;
    }
    // unweave the list now
    let oldList = head;
    let newList = head.next;
    let dummy = newList;
    while (oldList !== null) {
        oldList.next = oldList.next.next;
        newList.next = newList.next ? newList.next.next : null;
        oldList = oldList.next;
        newList = newList.next;
    }
    return dummy;
};

/* 
    Time Complexity: O(n)
    Space Complexity: O(1)
*/