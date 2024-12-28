"use strict";
function merge(nums1, n, nums2, m) {
    // let i=0, j=0;
    // const ans: number[] = Array(m+n);
    // let idx=0;
    // while(i<n && j<m) {
    //     if(nums1[i] <= nums2[j]) {
    //         ans[idx++] = nums1[i++];
    //     } else {
    //         ans[idx++] = nums2[j++];
    //     }
    // }
    // while(i<n) ans[idx++] = nums1[i++];
    // while(j<m) ans[idx++] = nums2[j++];
    // console.log(ans);
    let first = n - 1;
    let last = m - 1;
    let index = m + n - 1;
    while (index >= 0) {
        if (last < 0)
            break;
        if (first >= 0 && nums1[first] < nums2[last]) {
            nums1[index] = nums2[last--];
        }
        else {
            nums1[index] = nums1[first--];
        }
        index--;
    }
    console.log(nums1);
}
const nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;
merge([1], 1, [], 0);
