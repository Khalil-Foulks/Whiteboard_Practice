const pair_with_targetsum = function(arr, target_sum) {
    let left = 0, right = arr.length - 1

    while(left < right){
        if(arr[left] + arr[right] == target_sum){
            return [left, right]
        }

        if(arr[left] + arr[right] > target_sum){
            right -= 1
        }
        else if (arr[left] + arr[right] < target_sum){
            left += 1
        }

    }
}

/* 
  time complexity O(n)
  space complexity O(1)
*/