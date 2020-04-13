// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abfba") === true
//   palindrome("abcdefg") === false

// asd dsa as d sa

// solution 1
// (str.length-1) / 2; Math.floor(str.length/2)
// function palindrome(str) {
//     // 第一位和最后一位是不是一样
//     if (str.length % 2 === 0) {
//         for (let i = 0, j = str.length-1; i < str.length / 2 , j >= str.length / 2; i++, j--) {
//             if (str[i] !== str[j]) return false
//         }
//         return true
//     } else {
//         for (let i = 0, j = str.length-1; i < (str.length-1) / 2 , j >= str.length / 2; i++, j--) {
//             if (str[i] !== str[j]) return false
//         }
//         return true
//     }
    
// }

// solution 2
// function palindrome(str) {
//     let reversed = ""
//     for (let i = str.length-1; i >= 0; i--) {
//         reversed += str[i]
//     }
//     // reversed = str.split("").reverse().join("")

//     // if (str !== reversed) {
//     //     return false 
//     // } else {
//     //     return true
//     // }

//     // if (str !== reversed) return false
//     // return true

//     return str === reversed
// }

// solution 3
function palindrome(str) {
    //asdsa => ["a","s","d","s","a"]

    // help function
    const checkEqual = (char, i) => {
        return char === str[str.length-1-i]
    }
    return str.split("").every(checkEqual) 
}

module.exports = palindrome;
