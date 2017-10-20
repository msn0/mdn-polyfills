import test from 'ava';
import find from './find';

test('should find cherries', t => {
    const inventory = [
        { name: 'apples', quantity: 2 },
        { name: 'bananas', quantity: 0 },
        { name: 'cherries', quantity: 5 }
    ];

    t.deepEqual(find.call(inventory, findCherries), { name: 'cherries', quantity: 5 });
});

test('should find primes', t => {
    t.deepEqual(find.call([4, 5, 8, 12], isPrime), 5);
});

test('should return undefined if not found', t => {
    t.deepEqual(find.call([4, 6, 8, 12], isPrime), undefined);
});

test('only the first one should be found', t => {
    t.deepEqual(find.call([4, 5, 8, 12, 17], isPrime), 5);
});

function findCherries(fruit) {
    return fruit.name === 'cherries';
}

function isPrime(element) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

