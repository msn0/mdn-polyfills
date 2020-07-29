import find from './find';

if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', find);
}
