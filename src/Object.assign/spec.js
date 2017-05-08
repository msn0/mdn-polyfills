import test from 'ava';
import assign from './assign';

test('should merge objects', t => {
    const foo = { foo: 'foo' };
    const bar = { bar: 'bar' };

    t.deepEqual(assign(foo, bar), { foo: 'foo', bar: 'bar' });
});

test('should clone object', t => {
    const foo = { foo: 'foo' };

    const bar = assign({}, foo);

    t.not(foo, bar);
    t.deepEqual(foo, bar);
});
