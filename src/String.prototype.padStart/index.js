import padStart from './padStart';

if (!String.prototype.padStart) {
    String.prototype.padStart = padStart;
}