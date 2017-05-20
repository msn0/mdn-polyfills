import test from 'ava';
import startsWith from './startsWith';

test('String.prototype.startsWith', t => {
    const str = 'To be, or not to be, that is the question.';

    t.true(startsWith.call(str, 'To be'));
    t.false(startsWith.call(str, 'not to be'));
    t.true(startsWith.call(str, 'not to be', 10));
});
