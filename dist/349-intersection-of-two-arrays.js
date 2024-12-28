"use strict";
// sort. two pointer approach, and set data structure used
function intersectionOfTwoArray(arr1, arr2) {
    const ans = [];
    // sort two arrays
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    const N = arr1.length;
    const M = arr2.length;
    let i = 0;
    let j = 0;
    const setData = new Set();
    while (i < N && j < M) {
        if (arr1[i] === arr2[j]) {
            setData.add(arr1[i]);
            i++;
            j++;
        }
        else if (arr1[i] < arr2[j]) {
            i++;
        }
        else {
            j++;
        }
        if (i > 0 && arr1[i] === arr1[i + 1])
            i++;
        if (j > 0 && arr2[j] === arr2[j + 1])
            j++;
    }
    // convert set to array
    // for(let element of setData) {
    //     ans.push(element);
    // }
    // return Array.from(setData);
    return [...setData];
}
// using map
function intersectionOfTwoArrayUsingMap(arr1, arr2) {
    //initialize the map
    const seenMap = new Map();
    const result = [];
    for (let ele of arr1) {
        seenMap.set(ele, 1);
    }
    for (let ele of arr2) {
        if (seenMap.has(ele) && seenMap.get(ele) === 1) {
            result.push(ele);
            seenMap.set(ele, 0);
        }
    }
    return result;
}
const arr1 = [61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62, 35, 89, 5, 95, 12, 86, 58, 77, 30, 64, 46, 13, 5, 92, 67, 40, 20, 38, 31, 18, 89, 85, 7, 30, 67, 34, 62, 35, 47, 98, 3, 41, 53, 26, 66, 40, 54, 44, 57, 46, 70, 60, 4, 63, 82, 42, 65, 59, 17, 98, 29, 72, 1, 96, 82, 66, 98, 6, 92, 31, 43, 81, 88, 60, 10, 55, 66, 82, 0, 79, 11, 81];
const arr2 = [5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88, 45, 15, 34, 92, 84, 38, 85, 34, 16, 6, 99, 0, 2, 36, 68, 52, 73, 50, 77, 44, 61, 48];
console.log(intersectionOfTwoArray(arr1, arr2));
console.log(intersectionOfTwoArrayUsingMap(arr1, arr2));
