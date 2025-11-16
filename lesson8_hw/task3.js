const array = [10, 20, 30, 40, 50];
const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
);
console.log(`Sum of array elements: ${sum}`);
