# https://leetcode.com/problems/add-two-numbers/

# You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

# You may assume the two numbers do not contain any leading zero, except the number 0 itself.

# Example 1:

# Input: l1 = [2,4,3], l2 = [5,6,4]
# Output: [7,0,8]
# Explanation: 342 + 465 = 807.

# Example 2:

# Input: l1 = [0], l2 = [0]
# Output: [0]

# Example 3:

# Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
# Output: [8,9,9,9,0,0,0,1]


# NOT FINISHED

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def addTwoNumbers(self, l1, l2):
        # input = two seperate linked list
        # each node can only be in single digits
        # each list can be read in reverse order
        # add each node in the matching numbers place
        # output = a single linked list
        
        # create a cur pointer for each linked list
            # cur_1, cur_2
        # start at head
        # add the value of cur_1 node + cur_2 node
        # use that val to create new listnode
        # cur_1 = cur1.next
        # cur_2 = cur2.next
        # add the value of cur_1 node + cur_2 node
        # use that val to create new listnode
        # set prev new listnode.next to cur new listnode
        # repeat until gone through both linked lists
        # if one linked list is shorter than the other
            # if only 1 cur pointer is pointing to none 
            # create a listnode with 0 as a value at that numbers place
            
        cur_1 = l1
        cur_2 = l2
        
        
        while cur_1 is not None or cur_2 is not None:
            # print(cur_1)
            # print(cur_2)
            # print('--------')
            
            sumVal = cur_1.val + cur_2.val
            
            if cur_1.next is None and cur_2.next is not None:
                cur_1.next = ListNode(0)
            if cur_2.next is None and cur_1.next is not None:
                cur_2.next = ListNode(0)
            
            if sumVal >= 10:
                sumVal %= 10
                if cur_1.next.val is None:
                    cur_1.next = ListNode(0)
                cur_1.next.val += 1
                
            cur_1.val = sumVal
            
            prev_1 = cur_1
            prev_2 = cur_2
            
            
            cur_1 = prev_1.next
            cur_2 = prev_2.next
            
        return l1