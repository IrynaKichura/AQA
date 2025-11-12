class Todo {
    static async getTodo() {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/todos/1'
            );
            const todo = await response.json();
            return todo;
        } catch (error) {
            console.error('An error occurred:', error);
            throw error;
        }
    }
}

Todo.getTodo().then(console.log).catch(console.error);

class User {
    static async getUser() {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/users/1'
            );
            const user = await response.json();
            return user;
        } catch (error) {
            console.error('An error occurred:', error);
            throw error;
        }
    }
}
User.getUser().then(console.log).catch(console.error);
