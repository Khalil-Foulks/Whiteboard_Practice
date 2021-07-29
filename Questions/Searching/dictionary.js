// take list of words
// sort it alphabetically (A - Z)
// grab the first word
// go back to original list of words 
// search for that word in the list
// grab the index for that word
// return that index as the ans

function findRotationPoint(words) {

    // Find the rotation point in the vector
    
    let wordsCopy = [...words]
    wordsCopy.sort()
    let start = wordsCopy[0]
    
    for(i = 0; i < words.length; i++){
      if (words[i] === start){
        return i
      }
    }
    return false;
}

/* 
    where n is len of input arr
    time complexity - O(n)
    space complexity - O(n)
*/