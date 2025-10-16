
console.log("Lesson 6");

// function sumNumbers(num1, num2) {
//  return num1 + num2;
// }
// const result = sumNumbers(3, 4);
// console.log(result);
// console.log("End of Lesson 6");

// const randomNumber = (min = 1)=>{return Math.random()+min};
// console.log(randomNumber(7));
// console.log(randomNumber(undefined));

function sumNumbers2(num1, num2,... numbers) {
 //return num1 + num2;
 console.log(numbers);
 return num1 + num2 ;
}
sumNumbers2(3, 4, 5, 6, 7, 8);
console.log(sumNumbers2(3, 4, 5, 6, 7, 8));