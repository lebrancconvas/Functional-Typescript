// Higher-Order Function with Arity.
function add(a: number): (b: number) => number {
  return function (b: number) {
    return a + b;
  }
}

console.log(`add 1, 2: ${add(1)(2)}`);

let addTwo = add(2);
console.log(`add two with 9: ${addTwo(9)}`);
