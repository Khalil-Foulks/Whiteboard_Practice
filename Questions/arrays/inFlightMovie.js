//--------------Plan------------
// Check that there are at least 2 movies
// Pick 2 different movies 
// check that both are shorter than flightlength
// add both movies length and see if it's equal to flightlength
// if not compare two different movies
// if no combos equal flightlength then answer is False

//--------Psuedo Code----------------------
// make hash tbl

// check that movieLen > 1
// 1st loop through movielen arr
  // create total variable
  
  // grab 1st movie
  // 2nd loop though movielen arr starting +1 from 1st loop
    // grab 2nd movie
    // add both movies
    // store total as key in obj
    // value = [movie1,movie2]
//check if flightlen in hashtbl
  // return true if in hashtbl
  // return false otherwise

function canTwoMoviesFillFlight(movieLengths, flightLength) {

    // Determine if two movie runtimes add up to the flight length
    
    let movies = {}
    
    if(movieLengths.length > 1) {
        for(let i=0; i < movieLengths.length; i++) {
            let total = 0
            let movie1 = movieLengths[i]

            if (movie1 >= flightLength) {
                continue
            }
        
            for(let j=i+1; j < movieLengths.length; j++) {
                let movie2 = movieLengths[j]
                total = movie1 + movie2
                // console.log(total)

                if (movie2 >= flightLength) {
                    continue
                }
                
                if (!(`${total}` in movies)) {
                    movies[total] = [movie1,movie2]
                }
            }     
        }

        // console.log(movies)
        if(`${flightLength}` in movies) {
            return true
        }
    }
  
    return false;
}

canTwoMoviesFillFlight([2, 4, 6], 6);

// where n is # of movies
//time - O(n)^2
//space - O(1)