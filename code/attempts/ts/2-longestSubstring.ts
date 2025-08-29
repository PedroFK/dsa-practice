// Challenge: Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s: string): string {
  let set = new Set<string>();
  let left = 0;
  let maxLen = 0;
  let startIdx = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    if (right - left + 1 > maxLen) {
      maxLen = right - left + 1;
      startIdx = left;
    }
  }

  return s.slice(startIdx, startIdx + maxLen);
}

console.log(lengthOfLongestSubstring("pwwkew"));   // ["wke"]
console.log(lengthOfLongestSubstring("abcabcbb")); // ["abc"]
console.log(lengthOfLongestSubstring("bbbbb"));    // ["b"]
console.log(lengthOfLongestSubstring("ewqeq"));    // ["ewq"]
