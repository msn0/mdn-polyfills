import test from 'ava';
import includes from './includes';

test('should determine whether an array includes a certain element', t => {
    const array = [1, 2, 3];

    t.true(includes.call(array, 2));
    t.false(includes.call(array, 4));
    t.false(includes.call(array, 3, 3));
    t.true(includes.call(array, 3, -1));
    t.true(includes.call([1, 2, NaN], NaN));
});
