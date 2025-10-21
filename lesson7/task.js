function log(any) {   
    console.log(any);
}
//callbacks
/*
function testRunner(testType, testPassedCB, testFailedCB ) {   
   log(`Running ${testType} tests...`);
   if (Math.random() > 0.5 ? true: false){
testPassedCB();
    
   } else{
    testFailedCB();
   }
}
function testPassedCB() {   
    log('Passed');
}
function testFailedCB() {   
    log('Failed');
}
testRunner('API', testPassedCB, testFailedCB);
*/
// this.name = 'Iryna';
// const obj1 = {
// name: 'Slava',
// greet: function() {
//         return () => {
//     return (`Hello, ${this.name}!`); 
//     }       
//  }
// } 
 

// log(obj1.greet()());//Hi Slava because arrow function takes 'this' from its parent function
// this.name = 'Iryna';
//  const obj1 = {
//  name: 'Slava',
// greet: function() {
//     //const secondName = this.name;
//     return ()=>{
//         return () => {
//     return (`Hello, ${this.name}!`); 
//     }       
//   }
//  } 
// }  
// //log(obj1.greet()()());
// //log(this.name);
// log(obj1.greet()()());//Hi Slava because arrow function takes 'this' from its parent function

this.name = 'Iryna';
 const obj1 = {
 name: 'Slava',
greet: function() {
    //const secondName = this.name;
    return function hello(){
        return () => {
    return (`Hello, ${this.name}!`); 
    }       
  }
 } 
}  
//log(obj1.greet()()());
//log(this.name);
log(obj1.greet()()());//Hi Undefined because regular function has its own 'this' and it is not taken from parent, if uncomment secondName and pass it instead of this.name it will be Hi Slava