async function getTodo() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos/1'
        );
        const todo = await response.json();
        console.log(todo);
        return todo;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
}
async function getUser() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users/1'
        );
        const user = await response.json();
        console.log(user);
        return user;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
}
const promiseA = getTodo();
const promiseB = getUser();
const promisesCollectionAll = Promise.all([promiseA, promiseB]);

console.log(promisesCollectionAll);

Promise.race([promiseA, promiseB])
    .then((x) => console.log('Fulfilled: ', x))
    .catch((x) => console.log('Rejected: ', x));
