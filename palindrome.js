let x = 121;
var isPalindrome = function (x) {
  if (x >= 2147483647) {
    return 0;
  } else if (x <= -2147483648) {
    return 0;
  }
  revX = x.toString().split("").reverse().toString().replace(/,/g, "");
  if (x == parseInt(revX)) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};
isPalindrome(x);
