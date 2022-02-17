var romanToInt = function(s) {

    const conversion = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;

    for (i=0; i < s.length; i++){
        const cur = conversion[s[i]];
        const next = conversion[s[i+1]];

        if (cur < next){
            result += next - cur // IV -> 5 - 1 = 4
            i++
        } else {
            result += cur
        }
    }

    return result; 
};

/* 
    time complexity: O(n) => n = length of string
    space complexity: O(1)
*/