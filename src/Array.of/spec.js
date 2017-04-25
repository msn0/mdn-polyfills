import test from 'ava';
import of from './of';

test('should create array from arguments', t => {
    const actual = of('foo', 2, null, {});

    t.deepEqual(actual, ['foo', 2, null, {}]);
});
