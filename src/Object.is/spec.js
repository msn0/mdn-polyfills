import test from 'ava';
import is from './is';

test('Object.is', t => {
  t.true(is('foo', 'foo') === true);
  t.true(is('foo', 'bar') === false);
  const test = { a: 1 };
  t.true(is(test, test) === true);
  const test2 = { a: 2, b: 3 };
  t.true(is(test, test2) === false);
  t.true(is(0, -0) === false);
  t.true(is(-0, -0) === true);
  t.true(is(NaN, 0 / 0) === true);
});
