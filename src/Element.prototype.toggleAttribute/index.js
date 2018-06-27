import toggle from './toggleattribute';

if (window.Element && !Element.prototype.toggleAttribute) {
    Element.prototype.toggleAttribute = toggle;
}
