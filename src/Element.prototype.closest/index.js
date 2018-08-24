import closest from './closest';
import '../Element.prototype.matches/index';

if (window.Element && !Element.prototype.closest) {
    Element.prototype.closest = closest;
}
