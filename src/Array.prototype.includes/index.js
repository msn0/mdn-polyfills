import includes from './includes';

if (!Array.prototype.includes) {
    Array.prototype.includes = includes;
}
