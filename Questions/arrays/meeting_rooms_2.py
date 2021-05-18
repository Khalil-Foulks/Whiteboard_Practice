 # Very similar with what we do in real life. Whenever you want to start a meeting, 
 # you go and check if any empty room available (available > 0) and
 # if so take one of them ( available -=1 ). Otherwise,
 # you need to find a new room someplace else ( numRooms += 1 ).  
 # After you finish the meeting, the room becomes available again ( available += 1 ).
 # e is a pointer to the first available room

def minMeetingRooms(self, intervals):
    e = ret = 0
    start = sorted(i[0] for i in intervals)
    end = sorted(i[1] for i in intervals)

    for s in range(len(start)):
        if start[s] < end[e]: 
            ret += 1
        else: 
            e += 1
    return ret