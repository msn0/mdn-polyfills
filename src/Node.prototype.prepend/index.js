import prepend from './prepend';

[
    Element.prototype,
    Document.prototype,
    DocumentFragment.prototype
].forEach(function (item) {
    if (item.hasOwnProperty('prepend')) {
        return;
    }
    Object.defineProperty(item, 'prepend', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: prepend
    });
});
