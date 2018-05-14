import some from './some';

if (!Array.prototype.some) {
    Array.prototype.some = some;
}
