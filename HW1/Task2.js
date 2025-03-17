const isPalindrom = (str) => {
    if (str === str.split("").reverse().join("")){
        return true;
    }

    return false;
    
    // let left = 0; 
    // let right = str.length - 1;

    // while (left < right) {
    //     if (str[left] === str[right]) {
    //         left++;
    //         right--;
    //     } else {
    //         return false;
    //     }
    // }
    // return true;
}



console.log(isPalindrom("abacaba")); 
console.log(isPalindrom("abaaba"));
console.log(isPalindrom("abca"));

