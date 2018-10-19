import polyfillClassList from './classList';
import '../String.prototype.trim/index';

if (window.Element && !('classList' in Element.prototype)) {
    polyfillClassList(window);
}
