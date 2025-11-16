const array1 = [1, 2, 3, 4, 5];
const array2 = array1.map((number) => {
    let index = array1.indexOf(number);
    return number * index;
});
console.log(array2);
