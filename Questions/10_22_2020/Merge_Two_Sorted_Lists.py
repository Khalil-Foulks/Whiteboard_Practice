# https://leetcode.com/problems/merge-two-sorted-lists/

# Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

# Example 1:

# Input: l1 = [1,2,4], l2 = [1,3,4]
# Output: [1,1,2,3,4,4]

# Example 2:

# Input: l1 = [], l2 = []
# Output: []

# Example 3:

# Input: l1 = [], l2 = [0]
# Output: [0]

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def mergeTwoLists(self, l1, l2):
        # input 
            # two seperate linked list
            # both lists are sorted
        
        # output
            # one single linked list
        
        # init cur pointer for placeholder head node
        # init LL3 = cur pointer
        # compare lists values of LL1 and LL2
        # lowest value  become next in l3
        # traverse to next node in LL1 and LL2
        # repeat comparisions adding to LL3
        
        # if both LL1 and 2 are empty return LL1
        # if one linked list is empty and the other is not
            # return the LL that is not empty
        # if len of LL 1 and 2 are not the same add whatever is left in longest LL to LL3
        # if both values are the same add LL1 value first


        cur = ListNode(0)
        l3 = cur
        
        if l1 is None and l2 is None:
            return l1
        
        while l1 is not None and l2 is not None:
            if l1.val < l2.val:
                cur.next = l1
                l1 = l1.next

            else:
                cur.next = l2
                l2 = l2.next
                
            cur = cur.next
            
        cur.next = l1 or l2
        return l3.next