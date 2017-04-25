import test from 'ava';
import filter from './filter';

test('should filter out values', t => {
    const filtered = filter.call([12, 5, 8, 130, 44], isBigEnough);

    t.deepEqual(filtered, [12, 130, 44]);
});

function isBigEnough(value) {
    return value >= 10;
}
