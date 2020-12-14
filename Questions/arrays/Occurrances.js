function findNumberWithNOccurrances(numbers,n){
    let cache = {}
    let ret = {}

    function swap(obj){
        for(var key in obj) {
            ret[obj[key]] = parseInt(key);
        }
    }

    for(let i = 0; i < numbers.length; i++){
        let num = numbers[i];
        cache[num] ? cache[num] + 1: 1;

        cache[num] = cache[num] ? cache[num] + 1: 1;
    }
    swap(cache)
    if (n in ret) {
        return ret[n.toString()]
    }
}

// console.log(findNumberWithNOccurrances([10,20,20,5,5,5,20,10,2,20,100], 4))