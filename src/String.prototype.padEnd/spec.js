import test from 'ava';
import padEnd from './padEnd';

test('String.prototype.padEnd', t => {
    const str = 'abc';

    t.true(padEnd.call(str, 10) === 'abc       ');
    t.true(padEnd.call(str, 10, 'foo') === 'abcfoofoof');
    t.true(padEnd.call(str, 6, '123465') === 'abc123');
    t.true(padEnd.call(str, 1) === 'abc');
});