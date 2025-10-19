function isAdult(age) {
    if (age >= 18) {
        return true;
    } else if (age < 18) {
        return false;
    }  else {
        return 'Age not defined';
    } 
}
let result = isAdult(25)
console.log(`Age1 is adult: ${result}`);
result = isAdult(15)
console.log(`Age2 is adult: ${result}`);
result = isAdult('test')
console.log(result);