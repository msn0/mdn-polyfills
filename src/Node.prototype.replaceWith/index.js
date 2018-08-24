import replaceWith from './replacewith';

[
    Element.prototype,
    CharacterData.prototype,
    DocumentType.prototype
].forEach(function (item) {
    if (item.hasOwnProperty('replaceWith')) {
        return;
    }
    Object.defineProperty(item, 'replaceWith', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: replaceWith
    });
});
