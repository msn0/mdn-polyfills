import startsWith from './startsWith';

if (!String.prototype.startsWith) {
    String.prototype.startsWith = startsWith;
}
