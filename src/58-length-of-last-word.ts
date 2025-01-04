function lengthOfLastWord(s: string) : number {
    // My Approach - I
    // const splittedString = s.split(' ');
    // let len = -1;
    // for(let i = splittedString.length-1; i>=0; i--) {
    //     if(splittedString[i] !== '') {
    //         len =splittedString[i].length
    //         break;
    //     }
    // }
    // return len;

    ////Approach - II
    // let strIndex = s.length - 1;
    // while(strIndex >=0 && s[strIndex] === " ") {
    //     strIndex--;
    // }

    // let lastWordLength = 0;
    // while(strIndex >=0 && s[strIndex] !== " ") {
    //     strIndex--;
    //     lastWordLength++;
    // }
    // return lastWordLength;

    //// Approach - III
    // let strIndex = s.length;
    // let lastWordLength = 0;
    // while(strIndex > 0) {
    //     strIndex--;

    //     if(s[strIndex] !== " ") {
    //         lastWordLength++;
    //     } else if(lastWordLength > 0) {
    //         return lastWordLength;
    //     }
    // }
    // return lastWordLength;

    //Approach with built in function - IV
    let str = s.trim();
    return s.length - s.lastIndexOf(" ") - 1;
}

const str = "luffy is still joyboy";
console.log(lengthOfLastWord(str))