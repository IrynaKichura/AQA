let age = -10;

// if (age < 0) {
// throw new Error('Something went wrong -- OOOOPS!');
// }
try {
    if (age < 0) {
    throw new Error('Something went wrong -- OOOOPS!');//when we expect error
    }
    console.log(age);
} catch {
    throw new Error('Nice error message'); //rethrow error with our message
    console.log('Invalid age') // our nice custome error message
} finally {
    console.log('It is always executed');
}
console.log('end');