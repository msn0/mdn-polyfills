import remove from './remove';

[
    Element.prototype,
    CharacterData.prototype,
    DocumentType.prototype
].forEach(function (item) {
    if (item.hasOwnProperty('remove')) {
        return;
    }
    Object.defineProperty(item, 'remove', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: remove
    });
});
