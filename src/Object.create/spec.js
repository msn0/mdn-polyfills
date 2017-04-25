import test from 'ava';
import create from './create';

test('should create object with given prototype', t => {
    const foo = { foo: 'foo' };

    const object = create()(foo);

    t.deepEqual(object.__proto__, { foo: 'foo' });
});
