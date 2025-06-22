// Input: "listen", "silent" → true
function isAnagram(a: string, b: string): boolean {
  // your code
  if (a == b) return true;

  if (a.length !== b.length) return false;

  let aChars = [];
  for (let char of a) {
    aChars.push(char);
  }

  for (let char of b) {
    if (!aChars.includes(char)) return false;
    aChars.splice(aChars.indexOf(char), 1);
  }

  return aChars.length < 1;
}

console.log(isAnagram("listen", "silent"));
