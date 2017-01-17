var palindrome = require("../palindrome.js");
var assert = require("assert");

describe("isPalindrome", function() {
  it("should return true when string is valid palindrome", function() {
    assert.equal(true, palindrome.isPalindrome("kayak"));
  });

  it("should return false when string is not a palindrome", function() {
    assert.equal(false, palindrome.isPalindrome("hello"));
  })

  it("should return false when string is null", function() {
    assert.equal(false, palindrome.isPalindrome(null));
  });

  it("should return false when string is undefined", function() {
    assert.equal(false, palindrome.isPalindrome(undefined));
  });

  it("should return false when string is empty", function() {
    assert.equal(false, palindrome.isPalindrome(""));
  });
});
