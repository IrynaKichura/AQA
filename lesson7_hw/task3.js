function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('Denominator cannot be zero');
  } else if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error('Both numerator and denominator must be numbers');
  } else return numerator / denominator;
}

try {
  divide(10, 0);
} catch {
  console.log('Denominator cannot be zero');
}
try {
  divide(10, '0');
} catch {
  console.log('Both numerator and denominator must be numbers');
}
try {
  console.log(divide(6780, 90));
} finally {
  console.log('Work is done');
}
