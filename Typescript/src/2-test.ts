function groupByFirstLetter(arr: string[]): Record<string, string[]> {
  let res: Record<string, string[]> = {};
  arr.forEach((val) => {
    const firstLetter = val.charAt(0);
    if (!res[firstLetter]) res[firstLetter] = [];
    res[firstLetter].push(val);
  });
  return res;
}

console.log(groupByFirstLetter(["apple", "banana", "apricot", "blueberry", "avocado"]));
// {
//   a: ["apple", "apricot", "avocado"],
//   b: ["banana", "blueberry"]
// }
