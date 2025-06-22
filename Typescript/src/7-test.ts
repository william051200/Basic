function deepClone(obj: any): any {
  if (obj === null || typeof obj !== "object") {
    return obj; // primitive or null
  }

  if (Array.isArray(obj)) {
    return obj.map(deepClone); // recursively clone array items
  }

  const cloned: Record<string, any> = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]); // recursively clone object properties
    }
  }

  return cloned;
}

const obj = {
  name: "object",
  type: "clone",
  child: {
    name: "child_name",
  },
};
// const obj = ['abc', 'def']
let objClone = deepClone(obj);

console.log(objClone, obj);
console.log(objClone == obj);
console.log(objClone === obj);
