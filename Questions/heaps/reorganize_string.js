var reorganizeString = function(s) {
    let hash = {};
    let pq = [];
    
    // char count
    for (let char of s) hash[char] = hash[char] + 1 || 1;

    // [char, char count]
    for (let key in hash) pq.push([key, hash[key]]);
    // console.log(hash)
    // console.log(pq)

    // sort from highest count to lowest
    pq.sort((a,b)=>b[1]-a[1]);
    // console.log(pq)
    
    let res = "";    
    while (pq.length != 0) {
        // stores last char in res
        let lastChar = res[res.length - 1];
        // removes 1st element in pq array
        let first = pq.shift();

        // if last is not the same as 1st add first to res
        if(lastChar != first[0]) {
            res+=first[0];
            // console.log(`res:${res} pq:${pq}`)
            // if first's count is not 1 push [char, count -1] to end heap/pq
            if (first[1]!=1) pq.push([first[0], first[1]-1]);
        }
        
        else {
            // second char
            let second = pq.shift();
            // if there is no second char no more rearranges can occur
            if (second == null) return "";
            // add char to res
            res+=second[0];
            // push 1st ele in pq to end of pq
            pq.push(first);
            // if second's count is not 1 push [char, count -1] to end of heap/pq
            if (second[1]!=1) pq.push([second[0], second[1]-1]);
        }
        // sort from highest count to lowest
        pq.sort((a,b)=>b[1]-a[1]);
    }
    return res;
}