import test from 'ava';
import some from './some';

test('should return true for cherries', t => {
    const inventory = [
        { name: 'apples', quantity: 2 },
        { name: 'bananas', quantity: 0 },
        { name: 'cherries', quantity: 5 }
    ];

    t.true(some.call(inventory, findCherries));
});

test('only the first one should be found', t => {
    const inventory = [
        { name: 'apples', quantity: 2 },
        { name: 'bananas', quantity: 0 },
        { name: 'oranges', quantity: 5 }
    ];
    t.false(some.call(inventory, findCherries));
});

test('should return true when any prime found in array', t => {
    t.true(some.call([4, 5, 8, 12], isPrime));
});

test('should return false when no prime found in array', t => {
    t.false(some.call([4, 6, 8, 12], isPrime));
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

