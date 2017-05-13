import repeat from './repeat';

if (!String.prototype.repeat) {
    String.prototype.repeat = repeat;
}
