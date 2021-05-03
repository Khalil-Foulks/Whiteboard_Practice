# find the number of islands in a grid
# island = a groud of 1's (land) surrounded by 0's (water)
#-------------------------------------------------------------------------------
# find out where a land mass starts
# then figure out how far it expands
# keep track of where the portion of the land mass ends 
    # the edges of the grid and 0's
# once a the end of an island has been found increase the island count by 1
# ------------------------------------------------------------------------------
    
class Solution(object):
    def numIslands(self, grid):
        # island count
        islands = 0
        # outer loop / columns
        for i in range(len(grid)):  
            # inner loop / rows
            for j in range(len(grid[0])):
                # if current node is 1
                if grid[i][j] == '1':
                    islands += 1
                    self.part_of_island(i,j,grid)
        return islands

    def part_of_island(self, i, j,grid):
        # if cur node is northern edge or western edge or southern edge or eastern edge or a 0, stop
        if i < 0 or j < 0 or i == len(grid) or j == len(grid[0]) or grid[i][j] != '1':
            return
        # else, continue
        else:
            grid[i][j] = '0'
        # repeat above check for N,S,E,W of cur node  
        self.part_of_island(i,j+1,grid)
        self.part_of_island(i,j-1,grid)
        self.part_of_island(i+1,j,grid)
        self.part_of_island(i-1,j,grid)  