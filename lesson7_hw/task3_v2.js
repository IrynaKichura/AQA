function divide(numerator, denominator) {
    try {
        if (denominator === 0) {
            throw new Error('Denominator cannot be zero');
        }
    } catch {
        console.log('Denominator cannot be zero');
    }
    try {
        if (typeof numerator !== 'number' || typeof denominator !== 'number') {
            throw new Error('Both numerator and denominator must be numbers');
        }
    } catch {
        console.log('Both numerator and denominator must be numbers');
    }
    try {
        return numerator / denominator;
    } finally {
        console.log('Work is done');
    }
}

console.log(divide(6780, 90));
