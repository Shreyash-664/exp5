function calculator(num1, num2, operation) {
return new Promise((resolve, reject) => {
if (operation === '/' && num2 === 0) {
reject("Error: Division by zero is not allowed.");
} else {
switch (operation) {
case '+':
resolve(num1 + num2);
break;
case '-':
resolve(num1 - num2);
break;
case '*':
resolve(num1 * num2);
break;
case '/':
resolve(num1 / num2);
break;
default:
reject("Error: Invalid operation. Use +, -, *, or /.");
}
}
});
}
function getUserInput() {
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const operation = prompt("Enter the operation (+, -, *, /):");
calculator(num1, num2, operation)
.then(result => console.log(`Result: ${result}`))
.catch(error => console.log(`Error: ${error}`));
}
getUserInput();
