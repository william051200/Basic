// Input: "I love frontend"
// Output: "frontend love I"

function reverseWords(input: string): string {
  let res: string = input.split(" ").reverse().join(" ");
  return res;
}

console.log(reverseWords("I love frontend"));
