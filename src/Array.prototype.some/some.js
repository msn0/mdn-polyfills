export default function(callback, thisArg) {

    if (this == null) {
        throw new TypeError('Array.prototype.some called on null or undefined');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    var t = Object(this);
    var len = t.length >>> 0;

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
        if (i in t && callback.call(thisArg, t[i], i, t)) {
            return true;
        }
    }

    return false;

};
