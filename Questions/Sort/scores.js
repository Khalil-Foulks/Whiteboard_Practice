function sortScores(unorderedScores, highestPossibleScore) {

    // Sort the scores in O(n) time
  
    // create didSwap varible set to false
    // create a loop
    // create a cur var -> points to cur value
    // create a next var -> points to next idx if it exists
    // if cur val is < next grab both values and swap them  set didSwap to true and continue through loop
    // otherwise do nothing
    // if gone thorugh entire loop and did a swap then recurssivly call function
    // otherwise return input arr
    
    let didSwap = false
    
    if(sortScores.length <= 1){
      return unorderedScores;
    }
    
    for(let i = 0; i < unorderedScores.length; i++){
      let cur = unorderedScores[i]
      let next = unorderedScores[i+1]
      
      if (cur < next){
        didSwap = true
        unorderedScores[i] = next
        unorderedScores[i+1] = cur
      }
    }
    
    if(didSwap === true){
      sortScores(unorderedScores,highestPossibleScore)
    }
    
    return unorderedScores;
}

// time complexity - O(n^2)
// space compexity - O(1)