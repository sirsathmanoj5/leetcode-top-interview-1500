"use strict";
function findPeakElement(nums) {
    const N = nums.length;
    if (N < 0)
        return 0;
    //two pointer approach
    for (let index = 0; index < N; index++) {
        if (nums[index] > nums[index + 1]) {
            return index;
        }
    }
    return N - 1;
}
// space complexity: O(n)
// Space Complexity: O(1)
// console.log(findPeakElement([1,2,1,3,5,6,4]));
function findPeakElementOptimal(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((right + left) / 2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
}
console.log(findPeakElementOptimal([1, 2, 3]));
