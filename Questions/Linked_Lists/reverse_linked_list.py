# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# plan
# init prev as None
# init cur as head

# run while cur node is not none
# nxt = grab cur node's next node
# cur node's next should be changed to prev node
# change prev node to cur node
# change cur node to next node
# return prev node


class Solution:
    def reverseList(self, head):
        prev = None
        cur = head
        
        while cur is not None:
            nxt = cur.next
            cur.next = prev
            prev = cur
            cur = nxt
        return prev
            
# time
    # O(n) - n is # of nodes in LL
# space
    # O(1)             
        