function log(any) {
    console.log(any);
}

this.name = 'Iryna';
const obj1 = {
    name: 'Slava',
    greet: () => {
        return `Hello, ${this.name}!`;
    },
};

//log(obj1.greet()()());
//log(this.name);
log(obj1.greet()); //Hi Iryna because arrow function does not have its own 'this' and takes global this
