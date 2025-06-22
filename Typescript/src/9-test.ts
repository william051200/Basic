// Input: "  I   love  frontend  "
// Output: "I love frontend"
function normalizeSpaces(input: string): string {
  // your code

  let result: string[] = [];
  input
    .trim()
    .split(" ")
    .forEach((val) => {
      if (val !== "") result.push(val);
    });

  return result.join(" ");
}

console.log(normalizeSpaces("   I             love  frontend  "));
