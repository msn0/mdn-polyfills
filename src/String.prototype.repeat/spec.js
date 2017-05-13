import test from 'ava';
import repeat from './repeat';

test('should repeat a string', t => {
    t.is(repeat.call('abc', 0), '');
    t.is(repeat.call('abc', 1), 'abc');
    t.is(repeat.call('abc', 2), 'abcabc');
    t.is(repeat.call('abc', 3.5), 'abcabcabc');
});

test('should throw error for negative values', t => {
    const error = t.throws(() => {
        repeat.call('abc', -1);
    });

    t.is(error.name, 'RangeError');
    t.is(error.message, 'repeat count must be non-negative');
});

test('should throw error for improper values', t => {
    const error = t.throws(() => {
        repeat.call('abc', 1 / 0);
    });

    t.is(error.name, 'RangeError');
    t.is(error.message, 'repeat count must be less than infinity');
});
