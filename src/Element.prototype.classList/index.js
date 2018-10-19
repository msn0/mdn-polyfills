import polyfillClassList from './classList';
import '../String.prototype.trim';

if (window.Element && !Element.prototype.classList) {
    polyfillClassList(window);
}
