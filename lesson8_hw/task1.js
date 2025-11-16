const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
for (let number of numbers) {
    if (number > 0) {
        positiveCount++;
    } else if (number < 0) {
        negativeCount++;
    } else {
        zeroCount++;
    }
}
console.log(`Positive numbers: ${positiveCount}`);
console.log(`Negative numbers: ${negativeCount}`);
console.log(`Zeros: ${zeroCount}`);
