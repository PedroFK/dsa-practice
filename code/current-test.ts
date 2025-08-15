// Challenge: Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(string: string) {
  let actualLongestString = '';

  for (let i = 0; i < string.length; i++) {
    let actualString = '';
    for (let l = i; l < string.length; l++) {
      let nextLetter = string[l];

      if (actualString.indexOf(nextLetter) < 0) {
        actualString += nextLetter;
      } else {
        break;
      }

      if (actualString.length > actualLongestString.length) {
        actualLongestString = actualString;
      }
    }
  }

  return [string, actualLongestString];
}

console.log(lengthOfLongestSubstring("pwwkew"));   // returns 3 -> "wke"
console.log(lengthOfLongestSubstring("abcabcbb")); // returns 3 -> "abc"
console.log(lengthOfLongestSubstring("bbbbb"));    // returns 1 -> "b"
