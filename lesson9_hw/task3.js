const car1 = {
    brand: 'Volkswagen',
    model: 'ID.4',
    year: 2024,
};

const car2 = {
    brand: 'Volkswagen',
    model: 'ID.4',
    owner: 'Iryna Kichura',
};
const car3 = { ...car1, ...car2 };
console.log(car3);
