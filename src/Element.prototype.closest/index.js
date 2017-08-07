import closest from './closest';

if (window.Element && !Element.prototype.closest) {
    Element.prototype.closest = closest;
}
