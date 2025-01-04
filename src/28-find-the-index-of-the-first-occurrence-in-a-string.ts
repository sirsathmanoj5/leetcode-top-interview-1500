function findOccuranceInString(haystack: string, needle: string): number {
    const M = needle.length;
    const N = haystack.length;

    if(N ===1 && M === 1) {
        if(needle[M] === haystack[N]) return 0;
    }

    //sliding window approach
    for(let windowStart=0; windowStart < N-M; windowStart++) {
        for(let i=0; i< M; i++) {
            if(needle[i] !== haystack[windowStart+i]) {
                break;
            }
            if(i===M-1) {
                return windowStart;
            }
        }
    }

    return -1;
}

const haystack = "a", needle = "a";
console.log(findOccuranceInString(haystack, needle));