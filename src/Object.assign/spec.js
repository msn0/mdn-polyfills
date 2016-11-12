import test from 'ava';
import assign from './assign';

test('should work assign new properties to object', t => {
  const foo = { foo: 'foo' };
  const bar = { bar: 'bar' };

  t.deepEqual(assign(foo, bar), { foo: 'foo', bar: 'bar' });
});

