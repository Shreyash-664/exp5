function squareIterator(arr) {
let index = 0;
return {
next() {
if (index < arr.length) {
const value = arr[index] * arr[index];
index++;
return { value, done: false };
} else {
return { done: true };
}
}
};
}
const numbers = [1, 2, 3, 4, 5];
const squares = squareIterator(numbers);
let result = squares.next();
while (!result.done) {
console.log(result.value);
result = squares.next();
}

