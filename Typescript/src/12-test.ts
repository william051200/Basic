// Input: "hello world from frontend"
// Output: "Hello World From Frontend"
function capitalizeWords(str: string): string {
  // your code
  let result: string[] = [];
  str.split(" ").forEach((text: string) => {
    if (text === "") return;
    const newText = `${text.charAt(0).toUpperCase()}${text.slice(1, text.length)}`;
    result.push(newText);
  });
  return result.join(" ");
}

console.log(capitalizeWords("hello world    from frontend"));
