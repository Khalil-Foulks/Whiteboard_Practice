class Solution:
    def merge(self, intervals):
        out = []
        # sort by start value in i; i is an interval inside intervals 
        for i in sorted(intervals, key=lambda i: i[0]):
            if out and i[0] <= out[-1][1]:
                out[-1][1] = max(out[-1][1], i[1])
            else:
                out.append(i),
        return out

# time - O(n)
# space - O(1)