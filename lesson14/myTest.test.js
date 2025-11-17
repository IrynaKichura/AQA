//unit tests
// const sum = require("./sum")
// const axios = require("axios)
// test.skip('My test', () => {
//     expect(sum(1,2)).toBe(3);
// });

// test.skip('My test', () => {
//     try{
//     expect(sum(1,2)).toBe(4);
//     return 0
// } catch {

// }
// });
const axios = require('axios');

describe('api test', () => {
    test('Axios get', async () => {
        const response = (
            await axios.get('https://jsonplaceholder.typicode.com/posts')
        ).data;
        console.log(response[0]);
        expect(response[0].userId).toBe(1);
    });
});

describe('api test', () => {
    test('Axios post', async () => {
        const body = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        };
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            body
        );
        console.log(response[0]);
        expect(response.data.id).toBeDefined();
        expect(response.status).toBe(201);
    });
});
