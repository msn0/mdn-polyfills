import after from './after';

[
    Element.prototype,
    CharacterData.prototype,
    DocumentType.prototype
].forEach(function (item) {
    if (item.hasOwnProperty('after')) {
        return;
    }
    Object.defineProperty(item, 'after', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: after
    });
});
