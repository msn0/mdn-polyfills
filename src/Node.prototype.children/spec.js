import test from 'ava';
import browserEnv from 'browser-env';
import children from './children';

browserEnv(['window', 'document']);

(function(constructor) {
    Object.defineProperty(constructor.prototype, 'children', {
        get: children
    });
})(window.Node || window.Element);

test('should get children of element, ignoring text nodes', t => {
    const div = document.createElement('div');

    div.appendChild(document.createElement('span'));
    div.appendChild(document.createTextNode('foo'));
    div.appendChild(document.createElement('a'));

    t.is(div.children[0].tagName, 'SPAN');
    t.is(div.children[1].tagName, 'A');
});
