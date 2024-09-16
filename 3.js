function* generatePrimes(limit) {
function isPrime(num) {
if (num <= 1) return false;
for (let i = 2; i <= Math.sqrt(num); i++) {
if (num % i === 0) return false;
}
return true;
}
for (let num = 2; num <= limit; num++) {
if (isPrime(num)) {
yield num;
}
}
}
function getUserInput() {
const limit = parseInt(prompt("Enter the limit for prime numbers:"));
if (isNaN(limit) || limit < 2) {
console.log("Please enter a valid number greater than or equal to 2.");
return;
}
const primeGenerator = generatePrimes(limit);
console.log(`Prime numbers up to ${limit}:`);
for (let prime of primeGenerator) {
console.log(prime);
}
}
getUserInput();
