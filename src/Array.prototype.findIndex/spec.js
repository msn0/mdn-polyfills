import test from 'ava';
import findIndex from './findIndex';

function isBigEnough(element) {
    return element >= 15;
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

test('Array.prototype.findIndex', t => {
    t.is(findIndex.call([12, 5, 8, 130, 44], isBigEnough), 3);
    t.is(findIndex.call([4, 6, 8, 12], isPrime), -1);
    t.is(findIndex.call([4, 6, 7, 12], isPrime), 2);
});
