import forEach from './forEach';

if (!Array.prototype.forEach) {
    Array.prototype.forEach = forEach;
}
