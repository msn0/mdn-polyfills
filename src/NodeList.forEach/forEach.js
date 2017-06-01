export default function (callback, argument) {
    argument = argument || window;
    for (var i = 0; i < this.length; i++) {
        callback.call(argument, this[i], i, this);
    }
}
