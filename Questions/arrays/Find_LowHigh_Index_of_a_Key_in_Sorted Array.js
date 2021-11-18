let findLowIndex = function(arr, key) {
    let low = 0;
    let high = arr.length - 1;
    let mid = Math.floor(high / 2);
  
    while (low <= high) {
  
      let midElem = arr[mid];
  
      if (midElem < key) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
  
      mid = low + Math.floor((high - low) / 2);
    }
    
    if (low < arr.length && arr[low] === key) {
      return low;
    }
  
    return -1;
  };
  
let findHighIndex = function(arr, key) {
    let low = 0;
    let high = arr.length - 1;
    let mid = Math.floor(high / 2);

    while (low <= high) {
        let midElem = arr[mid];

        if (midElem <= key) {
            low = mid + 1;
        } 

        else {
            high = mid - 1;
        }
        mid = low + Math.floor((high - low) / 2);
    }

    if (high === -1){
        return high
    }

    if (high < arr.length && arr[high] === key) {
        return high;
    }

    return -1;
};