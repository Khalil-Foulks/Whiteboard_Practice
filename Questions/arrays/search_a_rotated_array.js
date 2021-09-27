let binarySearch = function(arr, start, end, key) {
    // assuming all the keys are unique.
    if (start > end) {
      return -1;
    }
  
    let mid = start + Math.floor((end - start) / 2);
  
    if (arr[mid] === key) {
      return mid;
    }
  
    if (arr[start] <= arr[mid] && key <= arr[mid] && key >= arr[start]) {
      return binarySearch(arr, start, mid - 1, key);
    } 
    
    else if (arr[mid] <= arr[end] && key >= arr[mid] && key <= arr[end]) {
      return binarySearch(arr, mid + 1, end, key);
    } 
    
    else if (arr[end] <= arr[mid]) {
      return binarySearch(arr, mid + 1, end, key);
    } 
    
    else if (arr[start] >= arr[mid]) {
      return binarySearch(arr, start, mid - 1, key);
    } 
    
    return -1;
  };
  
  let binarySearchRotated = function(arr, key) {
    return binarySearch(arr, 0, arr.length - 1, key);
};

/* 
  time complexity O(log n): n = array size
  space complexity O(1):
*/