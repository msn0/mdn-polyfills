import before from './before';

[
    Element.prototype,
    CharacterData.prototype,
    DocumentType.prototype
].forEach(function (item) {
    if (item.hasOwnProperty('before')) {
        return;
    }
    Object.defineProperty(item, 'before', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: before
    });
});
