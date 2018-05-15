import children from './children';

// https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children

// Overwrites native 'children' prototype.
// Adds Document & DocumentFragment support for IE9 & Safari.
// Returns array instead of HTMLCollection.
(function(constructor) {
    if (constructor &&
        constructor.prototype &&
        constructor.prototype.children == null) {
        Object.defineProperty(constructor.prototype, 'children', {
            get: children
        });
    }
})(window.Node || window.Element);
