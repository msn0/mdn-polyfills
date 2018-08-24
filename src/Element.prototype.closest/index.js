import closest from './closest';
import '../Element.prototype.matches';

if (window.Element && !Element.prototype.closest) {
    Element.prototype.closest = closest;
}
