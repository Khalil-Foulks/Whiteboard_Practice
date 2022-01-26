var romanToInt = function(s) {
    // holds possible base roman numerals + edge cases
    let romanNumerals = {
        'I' : 1,
        'IV' : 4,
        'V' : 5,
        'IX' : 9,
        'X' : 10,
        'XL' : 40,
        'L' : 50,
        'XC' : 90,
        'C' : 100,
        'CD' : 400,
        'D' : 500,
        'CM' : 900,
        'M' : 1000,
    }
    let total = 0
    
    for(let i = 0; i < s.length; i++){
        let char = s[i]
        let nextChar = s[i+1]
        
        // if cur char and next would 
        if((char.concat(nextChar) === 'IV' || char.concat(nextChar) === 'IX' || char.concat(nextChar) === 'XL' || char.concat(nextChar) === 'XC' || char.concat(nextChar) === 'CD' || char.concat(nextChar) === 'CM')){
            char = char.concat(nextChar)
            i++
        }
        total += romanNumerals[char]
        // console.log(i)
        // console.log(`cur:${char}  next:${nextChar} total:${total}`)
    }
    return total
};

/* 
  time complexity O(1) : 
                        in this case since the limit for s was 3999 it's constant time because 3999 = 'MMMCMXCIX' and I'm  not looping 3999 times through the string I'm only looping through 6 times 'M', 'M', 'M', 'CM' ,'XC', 'IX'
                        if 3999 wasn't the limit then it would be O(n) because i might have a situation like 'MMMMMMMMMMMMM'
                        and need to look through every character in the string
  space complexity O(1) : constant storage of roman numeral combinations
*/