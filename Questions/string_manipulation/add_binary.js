/**
    create function to turn binary str to decimal int
    create function to turn decimal int to binary str
    
    convert input strs to decimal 
    add both ints
    convert sum to decimal 
    return ans str
 */

binaryToDecimal = (binaryStr) => {
    place = binaryStr.length - 1
    total = 0
    
    for(let i = 0; i < binaryStr.length; i++){
        total += Number(binaryStr.slice(i,i+1)) * (2 ** place)  
        place -= 1
    }
    return total
}

decimalToBinary = (num) => {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (sum != 0) {
        rem = sum % 2;
        console.log(
            `Step ${step++}: ${sum}/2, Remainder = ${rem}, Quotient = ${parseInt(sum/2)}`
        );
        sum = parseInt(sum / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    return bin
}

var addBinary = function(a, b) {
    sum = binaryToDecimal(a) + binaryToDecimal(b)
    return decimalToBinary(sum).toString()
};

/**
    time complexity - O(n) - where n is the length of binary str

    space complexity - O(1) - no additional space used
 */