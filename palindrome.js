module.exports.isPalindrome = function(string) {
  if (!string) {
    return false;
  } else {
    var reverseString = string.split("").reverse().join("");
    return string === reverseString;
  }
};
