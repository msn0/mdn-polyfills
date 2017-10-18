import padEnd from './padEnd';

if (!String.prototype.padEnd) {
    String.prototype.padEnd = padEnd;
}