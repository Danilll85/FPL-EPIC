const isPalindrom = (str) => {
    let left = 0; 
    let right = str.length - 1;

    while (left < right) {
        if (str[left] === str[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
}



console.log(isPalindrom("abacaba")); 
console.log(isPalindrom("abaaba"));
console.log(isPalindrom("abca"));

