/*
create cur idx = 0
create ans = empty array
create product var = 1

while cur idx < input arr len
loop through input arr
if loop idx matches cur idx do nothing
otherwise multiply product by cur val
increment cur idx
reset product var = 1


*/

function getProductsOfAllIntsExceptAtIndex(intArray) {

    // Make a list of the products
    let curIdx = 0
    let product = 1
    let ans = []
  
    if (intArray.length < 2){
      throw 'Input array needs at least 2 numbers'
    }
  
    while (curIdx < intArray.length){
      for(let i = 0; i < intArray.length; i++){
        if(i === curIdx){
          continue
        }
        else{
          product = product * intArray[i]
        }
      }
      ans.push(product)
      curIdx += 1
      product = 1
    }
    return ans;
}

// console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4, 1, 7, 3, 4, 1, 7, 3, 4, 1, 7, 3, 4, 1, 7, 3, 4, 1, 7, 3, 4]))

// O(n) - time
// O(n) - spaces