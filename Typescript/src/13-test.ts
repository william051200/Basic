// Input: customMap([1, 2, 3], x => x * 2)
// Output: [2, 4, 6]
function customMap<T, U>(arr: T[], callback: (val: T, index: number) => U): U[] {
  // your code
  let result: U[] = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push(callback(arr[i], i));
  }
  return result;
}

// console.log(customMap([1, 2, 3], (x) => x * 2));
console.log(customMap(["a", "b", "c"], (x, i) => `${i}: ${x.toUpperCase()}`));
