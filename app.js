//TODO: Loops and iterations are used to execute repetitive tasks:

// While loop:
// let i = 0;
// while (i <= 100) {
//   console.log(i);
//   i++; // this is the same as i = i + 1
// }

//? The script follows the following rules:
// 1. Check if the value of i is lower or equal than 100
// 2. If yes, print in the console the value of i
// 3. Increment the value of the i by 1
// 4. Again check if the value of i is lower or equal to 100 and as long as it is, executes these steps over and over again.

//TODO: For Statement:
// The for statement creates a loop with three different values separated by semicolons: initialization, condition and final expression.
// for (initialization; condition; finalExpression) {
//     // code to execute
//   }

// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

//TODO: for of statement:
// The for...of statement creates a loop iterating over iterable such as strings, arrays, etc. It is pretty similar to the previously explained for statement.

const someIterable = "amsterdam";

for (const value of someIterable) {
  console.log(value);
}
