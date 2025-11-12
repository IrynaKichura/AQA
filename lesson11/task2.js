function getTodo() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => response.json())
            .then((todo) => {
                console.log(todo);
                resolve(todo);
            })
            .catch((error) => {
                console.error('Error:', error);
                reject(error);
            });
    });
}

function getUser() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((response) => response.json())
            .then((user) => {
                console.log(user);
                resolve(user);
            })
            .catch((error) => {
                console.error('Error:', error);
                reject(error);
            });
    });
}

const promiseA = getTodo();
const promiseB = getUser();
const promisesCollectionAll = Promise.all([promiseA, promiseB]);

console.log(promisesCollectionAll);

Promise.race([promiseA, promiseB])
    .then((x) => console.log('Fulfilled: ', x))
    .catch((x) => console.log('Rejected: ', x));
