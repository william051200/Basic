// Input: [1, 2, 3, 4, 5, 6], size = 2
// Output: [[1,2],[3,4],[5,6]]
function chunkArray(arr: number[], size: number): number[][] {
  // your code
  let result: number[][] = [];
  let chunk: number[] = [];
  arr.forEach((num) => {
    chunk.push(num);
    if (chunk.length == size) {
      result.push(chunk);
      chunk = [];
    }
  });

  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6], 2));
