const users = [
    {name: 'Yaryna',age: 18, mail: 'test@gmail.com', gender: 'F'},
    {name: 'Oksana',age: 26, mail: 'test2@gmail.com', gender: 'F'},
    {name: 'Roman',age: 39, mail: 'test3@gmail.com', gender: 'M'}
]

for (const { name, age, gender, mail} of users) {
  console.log(`Info for ${name}: age: ${age}, gender: ${gender}, mail: ${mail}`);
}
