var addStrings = function(num1, num2) {
    let sum = '';
    let len1 = num1.length;
    let len2 = num2.length;
    let carry = 0;

    // run until it goes through each digit in one of the inputs
    while(len1 > 0 || len2 > 0 || carry) {
        // grabs a digit from end of each string and converts to a num; moves one number place to the left
        let num1Digit = +num1.charAt(len1-1);
        let num2Digit = +num2.charAt(len2-1);
        len1--;
        len2--;

        // does addition and carry by hand
        let digitTotal = num1Digit + num2Digit + carry;
        carry = Math.floor(digitTotal / 10);
        let digitToAppend = digitTotal % 10;
        sum = digitToAppend + sum;
    } 

    return sum;
};

// Time Complexity: O(n) 
    // where n is length of longest string

// Space Complexity: O(n) 