import seedrandom from 'seedrandom';

// Set the seed
const seed = 1763519;
const rng = seedrandom(seed);

// Generate 1,000,000 random numbers
const numbers = [];
for (let i = 0; i < 1000000; i++) {
    numbers.push(rng.int32());
}

// 1. Number of positive numbers and number of negative numbers
let positiveCount = 0;
let negativeCount = 0;
for (const number of numbers) {
    if (number > 0) {
        positiveCount++;
    } else if (number < 0) {
        negativeCount++;
    }
}

// 2. Number of numbers whose remainder when divided by 7 is exactly 0, 3, 5 or 6
const remainderCounts = [0, 0, 0, 0];
for (const number of numbers) {
    const remainder = Math.abs(number) % 7;
    if (remainder === 0 || remainder === 3 || remainder === 5 || remainder === 6) {
        remainderCounts[remainder]++;
    }
}

// 3. An arrangement of counters that indicates the number of numbers according to their penultimate digit
const counters = Array(10).fill(0);
for (const number of numbers) {
    const penultimateDigit = Math.floor(Math.abs(number / 10) % 10);
    counters[penultimateDigit]++;
}
const countersString = counters.join(',');

// 4. Value and position of the least of all
const minValue = Math.min(numbers);
const minIndex = numbers.indexOf(minValue) + 1;

// 5. Number of numbers whose sign is the same as the previous one
let sameSignCount = 0;
for (let i = 1; i < numbers.length; i++) {
    if (Math.sign(numbers[i]) === Math.sign(numbers[i - 1])) {
        sameSignCount++;
    }
}

// 6. Integer average of all numbers containing exactly 6 digits
let sum = 0;
let count = 0;
for (const number of numbers) {
    if (Math.abs(number) >= 100000 && Math.abs(number) < 1000000) {
        sum += number;
        count++;
    }
}
const average = Math.round(sum / count);

console.log('Number of positive numbers:', positiveCount);
console.log('Number of negative numbers:', negativeCount);
console.log('Number of numbers with remainder 0:', remainderCounts[0]);
console.log('Number of numbers with remainder 3:', remainderCounts[3]);
console.log('Number of numbers with remainder 5:', remainderCounts[5]);
console.log('Number of numbers with remainder 6:', remainderCounts[6]);
console.log('Counters:', countersString);
console.log('Minimum value:', minValue);
console.log('Position of minimum value:', minIndex);
console.log('Number of numbers with same sign as previous:', sameSignCount);
console.log('Average of numbers with exactly 6 digits:', average);