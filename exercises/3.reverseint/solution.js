// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


// solution 1
function reverseInt(n) {
    let result = ""

    if (n >= 0) {
        result = n.toString().split("").reverse().join("")
    } else {
        result = "-" + Math.abs(n).toString().split("").reverse().join("")
    }

    // result = n >= 0 ? n.toString().split("").reverse().join("") : "-" + Math.abs(n).toString().split("").reverse().join("")

    return parseInt(result)
}

// solution 2
function reverseInt(n) {
    const reversed = n.toString().split("").reverse().join("")
    return parseInt(reversed) * Math.sign(n)
}

// solution 3
function reverseInt(n) {
    // result = 0 = 0 * 10 + 1 = 1 * 10 + 8 = 18 * 10 + 9 = 189
    // 981 % 10 = 1
    // 981 / 10 Math.floor() = 98
    // 98 % 10 = 8
    // 98 / 10 Math.floor() = 9
    // 9 % 10 = 0

    let absNum = Math.abs(n)
    let m, sum = 0
    while (absNum > 0) {
        m = absNum % 10
        sum = sum * 10 + m
        absNum = Math.floor(absNum/10)
    }

    return sum * Math.sign(n)

}

// logic
// function reverseInt(n) {
//     // // num -> string (toString) 15 -> "15"
//     // let numStr = n.toString()
//     // // string -> array (split) ["1", "5"]
//     // let numSplit = numStr.split("")
//     // // array reverse (reverse) ["5", "1"]
//     // let reverseArr = numSplit.reverse()
//     // // array -> string "51"
//     // let arrToStr = reverseArr.join("")
//     // // string -> num (parseInt)
//     // let result = parseInt(arrToStr)

//     // return result


//     let absNum = Math.abs(n)
//     let res = absNum.toString().split("").reverse().join("")

//     return n > 0 ? parseInt(res) : -parseInt(res)


// }

module.exports = reverseInt;
