// Input: "aabbcdde"
// Output: "c"
function firstUniqueChar(str: string): string | null {
  // your code
  let result: string[] = [];
  let unique: string | null = null;

  for (let char of str) {
    if (!result.includes(char)) {
      if (unique === null) unique = char;
      result.push(char);
    } else if (char === unique) {
      unique = null;
    }
    result.push(char);
  }

  return unique;
}

console.log(firstUniqueChar("aa sbbccdde"));
