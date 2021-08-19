var findJudge = function(n, trust) {
    let trusts = {}
    let judge = []
    
    function isJudge(person, trustSet){
        // console.log(person)
        let trustCount = 0

        // trusts no one
        if(trustSet.size > 0){
            return 
        }
        
        Object.keys(trusts).forEach((key) => {
            if(key != person && trusts[key].has(Number(person))){
                trustCount++
                // console.log(trustCount)
            }
        })
        
        // console.log(`# of ppl that trust ${person} is ${trustCount}`)
        if(trustCount === Object.keys(trusts).length - 1){
            return Number(person)
        }
    }
    
    for(let i = 1; i <= n; i++){
        trusts[i] = new Set
    }
    
    // console.log(trusts)
    for(let i = 0; i < trust.length; i++){
        let connection = trust[i]
        trusts[connection[0]].add(connection[1])
    }
    // console.log(trusts)
    Object.keys(trusts).forEach((person) => {
      if(isJudge(person,trusts[person])){
         judge.push(isJudge(person,trusts[person])) 
      }  
    })
    
    if(judge.length != 1){
        return -1
    }
    
    return judge[0]
    
    
};

/* 
    - create a hash tbl, trusts
    - judge = []
    - loop from 1 -> n, add each num to trusts = set
    
    - loop through trust array
        - trusts[1st person] add 2nd person to set
    - for each key in trusts judge.push(isJudge())
    
    - create isJudge(person, arr)
        - if(arr.length > 0)
            - return nothing

        - loop from 1 -> n
            - if n is not person and person not in trusts[n] (at least 1 person does not trust the person)
                - return nothing 

        - return person
    
    - if judge > 1
        return  - 1
    
    - return judge[0]
    
*/