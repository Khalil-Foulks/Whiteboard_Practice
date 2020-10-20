# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

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
        # add the value of cur_1 node + cur_2 node
        # find the remainder
        # find the amount to carry over
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
            sum_Val = cur_1.val + cur_2.val
            remainder = sum_Val % 10
            carry = sum_Val // 10 
            
            if cur_1.next is None and cur_2.next is not None:
                cur_1.next = ListNode(0)
            if cur_2.next is None and cur_1.next is not None:
                cur_2.next = ListNode(0)
            
            if sum_Val < 10:
                cur_1.val = sum_Val
            else:
                cur_1.val = remainder
                if cur_1.next is not None:
                    cur_1.next.val += carry
                if cur_1.next is None and carry > 0:
                    cur_1.next = ListNode(carry)
                    return l1
            
            
            cur_1 = cur_1.next
            cur_2 = cur_2.next
            # print(cur_1)
            # print(cur_2)
            # print('--------')
            
        return l1
            
        