//примітивні типи створюють копію при присвоєнні (видає 1 1 3 1 )
// let num1=1;
// console.log(num1);
// let num2=num1
// console.log(num2);
// num2=3;
// console.log(num2);
// console.log(num1);

//референси типи при присвоєнні створюють посилання на той самий об'єкт (видає [1] [1] [3] [1] - бо його не змінювали)
// let num1=[1];
// console.log(num1);
// let num2=num1
// console.log(num2);
// num2=[3];
// console.log(num2);
// console.log(num1);

//референси типи при зміні об'єкта через іншу змінну змінюється об'єкт і для першої змінної, бо при переприсвоєнні ми скопіювали лиш посилання на обєкт, а не сам обєкт (видає [1] [1] [1,2] [1,2])
let num1 = [1];
console.log(num1);
let num2 = num1;
console.log(num2);
num2.push(2);
console.log(num2);
console.log(num1);
