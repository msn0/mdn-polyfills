import toggle from './closest';

if (window.Element && !Element.prototype.toggleAttribute) {
    Element.prototype.toggleAttribute = toggle;
}
