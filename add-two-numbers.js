const l1 = [0]
const l2 = [0]

var addTwoNumbers = function(l1, l2) {
    let revL1 = l1.reverse().join("")
    let revL2 = l2.reverse().join("")
    let sum = Number(revL1) + Number(revL2)
    sum = sum.toString().split("").reverse()
    // console.log(revL1,revL2, sum)
    return(sum)
};

console.log(addTwoNumbers(l1,l2))