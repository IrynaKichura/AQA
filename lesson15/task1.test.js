const axios = require('axios');

describe('api test', () => {
    test('Get tests', async () => {
        try {
        const response = (
            await axios.get('https://jsonplaceholder.typicode.com/testss')
        ).data;
        console.log(response[4]);
        expect(response[4].email).toBe("Hayden@althea.biz");
        } catch (error) {
        console.error('Error fetching data:', error);
    }
    });
});