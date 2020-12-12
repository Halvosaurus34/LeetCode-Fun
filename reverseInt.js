// /**
//  * @param {number} x
//  * @return {number}
//  */
let x = 1534236469;
var reverse = function (x) {
  let reverseX = "";
  let xString = x.toString();
  let newReverseX;
  let neg;
  for (let i = xString.length - 1; i >= 0; i--) {
    reverseX += xString[i];
  }
  if (reverseX.endsWith("-")) {
    newReverseX = reverseX.slice(0, -1);
    neg = "-";
    reverseX = neg.concat(newReverseX);
  }
  console.log("Forward: ", x, "Reverse: ", parseInt(reverseX));
  if (parseInt(reverseX) >= 2147483647) {
    return 0;
  } else if (parseInt(reverseX) <= -2147483648) {
    return 0;
  } else {
    return parseInt(reverseX);
  }
};
reverse(x);
