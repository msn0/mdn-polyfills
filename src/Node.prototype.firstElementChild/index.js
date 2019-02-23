import firstElementChild from './firstElementChild';

// https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/firstElementChild

// Overwrites native 'firstElementChild' prototype.
// Adds Document & DocumentFragment support for IE9 & Safari.
// Returns array instead of HTMLCollection.
(function (constructor) {
  if (constructor &&
    constructor.prototype &&
    constructor.prototype.firstElementChild == null) {
    Object.defineProperty(constructor.prototype, 'firstElementChild', {
      get: firstElementChild,
    });
  }
})(window.Node || window.Element);
