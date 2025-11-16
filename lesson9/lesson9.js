// const obj = {name:"Slava", age: 25, city: "Kyiv"};
// const obj1 = new Object({name:"Oleg", age: 30, city: "Lviv" });
// const obj2={}
// obj2.name="Oksana"
// console.log(obj.name); // Slava
// console.log(obj1.name);
// console.log(obj2.name);
// obj.name="Viktor"
// console.log(obj.name); // Viktor
// const obj = {name:"Slava"};
// const obj1 = {name:"Igor", country:"USA"};
// function getCOUTRY(obj){
//     return result = obj.country ?? "Ukraine" // якщо в обєкті немає country то поверне Ukraine за замовчуванням
// }
// console.log(getCOUTRY(obj)); // Ukraine
// console.log(getCOUTRY(obj1)); // USA

// const obj = {}
// const arrey = []

// obj.name = "Slava"
// obj.city = "Kyiv"
// for (key in obj){
//     arrey.push(obj[key])
// }
// console.log(arrey); // ["name", "city"]

// const obj={
// sayHi: function(){
//     return 'Hi'
// },
// sayBye(){
//     return 'Bye'
// }
// }
// console.log(obj.sayHi());
// console.log(obj.sayBye());

/////////////////////////////////////////////
//деструктуризація масиву
// const array = [1,2,3,5,6]
// //const [one, two, three] = array//or const [one, , three] if we want omit 2
// //console.log(one, two, three);
// const [one, two, three, ...rest] = array
// console.log(rest[0]);
// //деструктуризація обєкту

// let obj = {name: "Ira", number: 1}
// const {name, number} = obj
// console.log(name, number)

const obj = {
    name: 'Iryna',
    sayHi: function () {
        return 'Hi';
    },
    sayBye() {
        return 'Bye';
    },
};
//const person = Object.values(obj)
//console.log(person)

obj2 = {
    name2: 'Ivan',
};
//bind 2 objects
obj3 = { ...obj, ...obj2 };
console.log(obj3);

delete obj3.name;
console.log(obj3);
