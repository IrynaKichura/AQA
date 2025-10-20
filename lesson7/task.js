function log(any) {   
    console.log(any);
}

// function testRunner(testType, testPassedCB, testFailedCB ) {   
//    log(`Running ${testType} tests...`);
//    if (Math.random() > 0.5 ? true: false){
// testPassedCB();
    
//    } else{
//     testFailedCB();
//    }
// }
// function testPassedCB() {   
//     log('Passed');
// }
// function testFailedCB() {   
//     log('Failed');
// }
// testRunner('API', testPassedCB, testFailedCB);
const obj1 = {
name: 'Slava',
greet: function() {
    const secondName = this.name;
    return function hello(){
        return () => {
    return (`Hello, ${this.name}!`); 
    }       
 }
} 
}  
log(obj1.greet()()());