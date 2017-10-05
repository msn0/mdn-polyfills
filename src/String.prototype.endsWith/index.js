import endsWith from './endsWith';

if (!String.prototype.endsWith) {
    String.prototype.endsWith = endsWith;
}
