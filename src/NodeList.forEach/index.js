import forEach from './forEach';

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = forEach;
}
