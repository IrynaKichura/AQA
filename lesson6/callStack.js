//self written code
const functionality = () => {
    console.log('Functionality executed');
};
function firstFunction() {
    console.log('First function started');
    secondFunction();
    console.log('First function ended');
}
function secondFunction() {
    console.log('Second function started');
    functionality();
    console.log('Second function ended');
}
