export default function (window) {

    // Polyfills DOM4 MouseEvent
    var MouseEvent = function (eventType, params) {
        params = params || { bubbles: false, cancelable: false };
        var mouseEvent = document.createEvent('MouseEvent');
        mouseEvent.initMouseEvent(eventType, params.bubbles, params.cancelable, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        return mouseEvent;
    }

    MouseEvent.prototype = Event.prototype;

    return MouseEvent;
}
