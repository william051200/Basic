// Input: "racecar"
// Output: true

function isPalindrome(str: string): boolean {
  // your code
  let fromStart = 0;
  let fromEnd = str.length - 1;

  while (fromStart < fromEnd) {
    if (str[fromStart] !== str[fromEnd]) return false;
    fromStart += 1;
    fromEnd -= 1;
  }

  return true;
}

console.log(isPalindrome("racfecar"));
