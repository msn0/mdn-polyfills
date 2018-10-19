import test from 'ava';
import trim from './trim';

test('String.prototype.trim', t => {
    t.true(trim.call('foo') === 'foo');
    t.true(trim.call('foo ') === 'foo');
    t.true(trim.call(' foo') === 'foo');
    t.true(trim.call(' foo ') === 'foo');
    t.true(trim.call('\tfoo\n') === 'foo');
});
