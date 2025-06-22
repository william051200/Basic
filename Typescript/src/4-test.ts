// Input: [1, [2, [3, 4]], 5]
// Output: [1, 2, 3, 4, 5]

function flatten(arr: any[]): any[] {
  // your code
  let res: any[] = [];
  arr.forEach((value) => {
    if (Array.isArray(value)) res.push(...flatten(value));
    else res.push(value);
  });
  return res;
}

console.log(flatten([1, [2, [3, 4]], 5]));
