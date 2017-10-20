import test from 'ava';
import padStart from './padStart';

test('String.prototype.padStart', t => {
    const str = 'abc';

    t.true(padStart.call(str, 10) === '       abc');
    t.true(padStart.call(str, 10, 'foo') === 'foofoofabc');
    t.true(padStart.call(str, 6, '123465') === '123abc');
    t.true(padStart.call(str, 8, '0') === '00000abc');
    t.true(padStart.call(str, 1) === 'abc');
});
