function getUniqueValues(input: string[]): string[] {
  let res: string[] = [];
  input.forEach((val) => {
    if (!res.includes(val)) res.push(val);
  });
  return res;
}

const res = getUniqueValues(["apple", "banana", "apple", "orange", "banana"]);
console.log(res)
// Output: ["apple", "banana", "orange"]
