// Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/append()/append().md
import append from './append';

[
    Element.prototype,
    Document.prototype,
    DocumentFragment.prototype
].forEach(function (item) {
    if (item.hasOwnProperty('append')) {
        return;
    }
    Object.defineProperty(item, 'append', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: append
    });
});
