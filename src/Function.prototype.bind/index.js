import bind from './bind';

if (!Function.prototype.bind) {
    Function.prototype.bind = bind;
}
