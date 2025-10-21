//recursion - when a function calls itself
function factorial(num) {
    if (num <=1) {//this is added to stop recursion otherwise it will use negative numbers and go forever
        return true;
    }   
return num * factorial(num - 1);
}   

console.log(factorial(5)); // 5*4*3*2*1=120

//can be done also with loop
function factorialLoop(num) {
    let result = 1;
    for (let i = num; i > 1; i--) {
        result = result * i;
    }
    return result;
}
console.log(factorialLoop(5));