function rotateImage(a) {
    let subArrs = {}
    
    for(let i = 0; i < a.length; i++) {
        subArrs[i] =  [];
    }
    
    for(let i = a.length-1; i >= 0; i--) {        
        for(let j = 0; j < a[i].length; j++) {
            subArrs[j].push(a[i][j]);
        }
    }
    
    for(let i = 0; i < a.length; i++) {
        a[i] = subArrs[i];
    }
    return a
}