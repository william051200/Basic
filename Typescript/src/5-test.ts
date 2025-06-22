// Input: "frontend"
// Output: { f:1, r:1, o:1, n:2, t:1, e:1, d:1 }

function countChars(str: string): Record<string, number> {
  // your code
  let result: Record<string, number> = {};
  for (const n of str) {
    if (result[n]) result[n] += 1;
    else result[n] = 1;
  }

  return result;
}

console.log(countChars("frontend"));
