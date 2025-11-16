const users = [
    { name: 'Yaryna', age: 18, mail: 'test@gmail.com', gender: 'F' },
    { name: 'Oksana', age: 26, mail: 'test2@gmail.com' },
    { name: 'Roman', age: 39, mail: 'test3@gmail.com', gender: 'M' },
    { name: 'Oleg', age: 24, gender: 'M', city: 'Lviv' },
];

for ({ name: myName, age, gender, mail, city = 'No city' } of users) {
    const mailNew = users.mail ?? 'Not indicated';
    let genderNew = users.gender ?? 'Not indicated';
    let cityNew = users.city;

    console.log(
        `Info for ${name}: age: ${age}, gender: ${gender}, mail: ${mail}, city: ${city}`
    );
}
