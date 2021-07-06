function highestProductOf3(arrayOfInts) {

    // Calculate the highest product of three numbers
    if (arrayOfInts.length < 3){
      throw 'Not enough numbers in input array';
    }
    
    let num1 = 0
    let num2 = 0
    let num3 = 0
    
    arrayOfInts.sort(function(a, b){return b - a})
    num3 = arrayOfInts[0]
    num1 = arrayOfInts[1]
    num2 = arrayOfInts[2]
    
    arrayOfInts.sort(function(a, b){return a - b})
    if (arrayOfInts[0] < 0  && arrayOfInts[1] < 0 ) {
      num1 = arrayOfInts[0]
      num2 = arrayOfInts[1]
    }
    
    if(num1 < 0 && num2 < 0 && num3 < 0) {
      num1 = arrayOfInts[arrayOfInts.length - 1]
      num2 = arrayOfInts[arrayOfInts.length - 2]
      num3 = arrayOfInts[arrayOfInts.length - 3]
    }
    
    // console.log(arrayOfInts)
    // console.log(`num1: ${num1}, num2: ${num2} num3: ${num3}`)
  
    return num1 * num2 * num3
}
  