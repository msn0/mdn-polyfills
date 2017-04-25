import filter from './filter';

if (!Array.prototype.filter) {
    Array.prototype.filter = filter;
}
