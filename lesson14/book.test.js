const axios = require('axios');

test("Get all book list", async () => {
    const response = await axios.get('https://demoqa.com/bookstore/v1/books', { //calling the get API
        headers: {
            'Content-Type': 'application/json',
        }
    });
    console.log(response.data);
    expect(response.status).toEqual(200); //asserting if the response code is 200
})