const axios = require('axios');

const getPosts = async (postId) => {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
        {
            params: {
                id: postId,
            },
            headers: {
                'X-Custom-Header': 'TestHeaderValue',
            },
        }
    );

    return response;
};

module.exports = {
    getPosts,
};
