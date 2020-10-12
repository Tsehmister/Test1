// function calc(a, b) {
//   return a + b;
// }

// console.log(calc(3, 4));
// console.log(calc(8, 8));

// function retVar() {
//   let num = 42;
//   return num;
// }

let calc = (a, b) => a + b;

console.log(calc(5, 17));
console.log(calc(24, 11));

let stru = "test";

console.log(stru.toUpperCase());

let twelve = "12.2px";

//console.log(Math.round(twelve));

console.log(parseInt(twelve));
console.log(parseFloat(twelve));

let a = 3;
function addTwo(x) {
  let ret = x + 2;
  return ret;
}
let b = addTwo(a);
console.log(b);
