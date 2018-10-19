import trim from './trim';

if (!String.prototype.trim) {
    String.prototype.trim = trim;
}
