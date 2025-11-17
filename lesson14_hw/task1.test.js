const axios = require('axios');

describe('api test', () => {
    test('Get postId', async () => {
        const response = (
            await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
        ).data;
        console.log(response[4]);
        expect(response[4].email).toBe("Hayden@althea.biz");
    });
});

describe('api test', () => {
    test('Create user', async () => {
        const body = {
            name: 'Name One',
            username: 'user1',
            email: "testuser1@gmail.com",
            address: {},
            phone: "1-770-736-8031 x56442",
            company: {}
        };
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/users',
            body
        );
        //console.log(response[0]);
        expect(response.data.id).toBeDefined();
        expect(response.status).toBe(201);
    });
});

describe('api test', () => {
    test('Get comment', async () => {
        const response = (
            await axios.get('https://jsonplaceholder.typicode.com/comments')
        ).data;
        console.log(response[30]);
        expect(response[30].postId).toBe(7);
    });
});

describe('api test', () => {
    test('Get album', async () => {
        const response = (
            await axios.get('https://jsonplaceholder.typicode.com/albums')
        ).data;
        console.log(response[0]);
        expect(response[0].title).toBe("quidem molestiae enim");
    });
});

describe('api test', () => {
    test('Save photo', async () => {
        const body = {
            albumId: 77,
            title: 'testPhoto',
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952"
        };
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/photos',
            body
        );
        
        expect(response.status).toBe(201);
    });
});