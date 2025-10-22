let myNumber = Math.ceil(Math.random() * 100);
function handleNum (num, handleEven , handleOdd) {
if (myNumber % 2 === 0) {
    return handleEven(num); 
} else {
    return handleOdd(num); 
};
}
function handleEven(num) {
    console.log(`The number ${num} is even.`);
};

function handleOdd(num) {
    console.log(`The number ${num} is odd.`);
};
handleNum (myNumber, handleEven , handleOdd);