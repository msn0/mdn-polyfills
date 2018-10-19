import polyfillClassList from './classList';
import '../String.prototype.trim/index';

if (window.Element && !Element.prototype.classList) {
    polyfillClassList(window);
}
