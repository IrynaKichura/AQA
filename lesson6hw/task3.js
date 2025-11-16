function checkOrder(available, ordered) {
    if (available < ordered) {
        return 'Your order is too large, we don’t have enough goods';
    } else if (ordered == 0) {
        return 'Your order is empty';
    } else if (available >= ordered && ordered > 0) {
        return 'The order is accepted';
    } else {
        return 'Invalid order quantity';
    }
}

console.log(checkOrder(100, 150));
console.log(checkOrder(100, 0));
console.log(checkOrder(100, 50));
console.log(checkOrder(100, -5));
