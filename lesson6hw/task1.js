function area1(length, width) {
    return length * width;
}
console.log(area1(10, 5));

const area2 = function (length, width) {
    return length * width;
};
console.log(area2(6, 4));

const area3 = (length, width) => length * width;
console.log(area3(7, 3));
