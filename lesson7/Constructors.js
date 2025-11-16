// function notConstructor(name){
//     return {
//         name: name,
//         greet: function(){
//              console.log(`Hello, ${this.name}!`);
//     }

// }
// }

// const obj1 = notConstructor('Slava');
// obj1.greet(); //Hello, Slava!

function Person(name) {
    this.name = name;
    this.greet = function () {
        console.log(`Hello, ${this.name}!`);
    };
}
const obj1 = new Person('Slava');
obj1.greet(); //Hello, Slava!
//constructor function Person returns new object with properties defined in function
