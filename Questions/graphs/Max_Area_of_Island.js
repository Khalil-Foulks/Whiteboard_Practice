var maxAreaOfIsland = function(grid) {
    // max area
    var max = 0;
    
    // loop through each row; i = row
    for (var i = 0; i < grid.length; i++) {
        // loop through each cell in a row; j is the column
        for (var j = 0; j < grid[0].length; j++) {
            // if cell is 1
            if (grid[i][j] === 1) {
                // figure out an islands area length
                var area = islandArea(i, j);
                // if island's area is > max it becomes new max; otherwise keep cur max
                max = area > max ? area : max;
            }
        }
    }

// finds an area's size
function islandArea(x, y) {
    var area = 0;
    //if row or column are out of bounds; or a cell is 0; return 0
    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] === 0) {
        return 0;
    }
    // set the cur cell to 0
    grid[x][y] = 0;
    // add cur cell (which would be a 1) + neighboring cells to area
    area = 1 + islandArea(x - 1, y) + islandArea(x + 1, y) + islandArea(x, y - 1) + islandArea(x, y + 1);
    // return area
    return area;
}
    
return max;
};


/*
    [
        [0,0,1,0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,0],
        [0,1,1,0,1,0,0,0,0,0,0,0,0],
        [0,1,0,0,1,1,0,0,1,0,1,0,0],
        [0,1,0,0,1,1,0,0,1,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,1,1,0,0,0,0]
    ]
    
    ============plan======================
    - use DFS
    
    - create a max var
    - look at individual cell in grid
    - if that cell is a 1 call the function that calculates an island's area, passing in x(row) and y(column) coordinates
    - store returned area
    - if island's area is > max it becomes new max; otherwise keep cur max
    
    - create function to calc island area total; params are x/y coordinates
    - set area = 0
    - check if x or y are out of bounds of grid or a cell is 0
        - return 0 (there is no island)
    - set the cur cell to 0
    - check the neighboring cells add there values + 1 to area
    - return area total

*/