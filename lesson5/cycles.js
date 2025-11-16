let age = 10;

// while(age<18) {
//     age++
//     console.log(age);
// }

for (let i = 1; i < 3; i++) {
    console.log('Start i');
    for (let y = 1; y < 3; y++) {
        console.log('Start y');
        console.log(`i = ${i}, y = ${y}`);
        console.log('End y');
    }
}
console.log('End i');

// for(let i=1; i<18; i++){
//     if(i===3 || i===5){
//         continue; //skip 3 and 5
//     }
//     console.log(i);
// }

//console.log(age>=18 ? "Adult" : "Child"); //ternary operator

// do {
//     age++
//     console.log(age);

// } while (age < 18);
