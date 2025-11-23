describe('api test', () => {
    test('Create user', async () => {
        const response = 
            await axios.post('https://demoqa.com/Account/v1/User', 
            {
  userName: "testuser1213",
  password: "testuser1213"
            },
        {validateStatus: false})

        
        console.log(response[0]);
       // expect(response[0].title).toBe("quidem molestiae enim");
    });
});