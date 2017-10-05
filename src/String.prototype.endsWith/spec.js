import test from 'ava';
import endsWith from './endsWith';

test('String.prototype.endsWith', t => {
    const str = 'To be, or not to be, that is the question.';

    t.true(endsWith.call(str, 'question.'));
    t.false(endsWith.call(str, 'to be'));
    t.true(endsWith.call(str, 'to be', 19));
});
