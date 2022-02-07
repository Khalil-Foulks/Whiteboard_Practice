var getKth = function(lo, hi, k) {
    // array to hold the powers
    let powers = []
    
    // loop through lo -> hi range (inclusive)
    for(let i = lo; i <= hi; i++){
        // for each int in range run transform func to find power
        let steps = transform(i)
        powers.push({steps: steps, 'idx': i})

    //     console.log(powers)
    }
    // console.log('----end-----')

    //sorts array smallest to largest # of steps
    powers.sort(function (a, b){
            return a.steps - b.steps
    })
    // console.log(powers)

    // return kth integer from array grabbing corestponding idx
    return powers[k-1].idx
};

// func to do the transformation from x -> 1
function transform(value){
    // create steps(power) counter
    let steps = 0
    
    // loop while value is not 1
    while(value > 1){
         // if even use even calc
        if(value % 2 === 0){
            value = value / 2
            steps++
        }
        // if odd use odd calc
        else {
            value = 3 * value + 1
            steps++
        }
    }
    // return steps(power) counter
    return steps
}

/* 
    for each int from low -> hi find the corresponding power value
    insert power into an array
    sort array
    using k pick the corresponding power value
    will always give a number that can transform into a 1 using the rules
*/

/* 
  time complexity O(n^3) 
  space complexity O(n) 
*/