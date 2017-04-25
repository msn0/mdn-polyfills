import test from 'ava';
import forEach from './forEach';

test('should iterate through elements', t => {
    const array = ['b', 'a', 'r'];
    const result = [];

    forEach.call(array, element => {
        result.push(element);
    });

    t.deepEqual(array, result);
});
