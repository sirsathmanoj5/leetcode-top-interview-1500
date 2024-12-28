"use strict";
function rotateArrayByK(nums, k) {
    const N = nums.length;
    k = k % N;
    let i = 0;
    const rotated = Array(N);
    while (i < N) {
        rotated[(i + k) % N] = nums[i];
        i++;
    }
    for (let j = 0; j < N; j++) {
        nums[j] = rotated[j];
    }
    console.log(nums);
}
const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
// console.log(rotateArrayByK(arr, k));
// [1,2,3,4,5,6,7], k = 3
// [7,1,2,3,4,5,6]
// [6,7,1,2,3,4,5]
// [5,6,7,1,2,3,4]
// Time compexity of the program is O(n)
// Space complexity of this program is: O(n) // because we're using extra array for processing
function rotateArrayByKUsingSlice(nums, k) {
    const N = nums.length;
    k = k % N;
    if (k !== 0) {
        let temp = nums.slice(-k).concat(nums.slice(0, -k));
        for (let i = 0; i < N; i++)
            nums[i] = temp[i];
    }
    console.log(nums);
}
// rotateArrayByKUsingSlice(arr,k);
function reverse(nums, first, last) {
    while (first < last) {
        let temp = nums[first];
        nums[first] = nums[last];
        nums[last] = temp;
        first++;
        last--;
    }
}
function rotateArrayByKInPlace(nums, k) {
    const N = nums.length;
    k = k % N;
    // first reverse the array
    reverse(nums, 0, N - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, N - 1);
    return nums;
}
console.log(rotateArrayByKInPlace(arr, 3));
