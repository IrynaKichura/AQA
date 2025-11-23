const jsonData = require('./api.js');

describe('Get posts', () => {
    test('includes headers and params in the request', async () => {
        const postId = 1;

        const response = await jsonData.getPosts(postId);
        console.log(response.data[0]);
        console.log(response);
        expect(response.status).toBe(200);
        expect(response.config.params.id).toBe(postId);
        expect(response.config.headers['X-Custom-Header']).toBe(
            'TestHeaderValue'
        );

        expect(response.data[0].id).toBe(postId);
    });
});
