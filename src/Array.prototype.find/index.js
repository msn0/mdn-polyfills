import find from './find';

if (!Array.prototype.find) {
    Array.prototype.find = find;
}
