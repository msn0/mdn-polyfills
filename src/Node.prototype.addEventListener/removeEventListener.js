export default function removeEventListener(type,listener /*, useCapture (will be ignored) */) {
    var counter=0;
    while (counter<eventListeners.length) {
        var eventListener=eventListeners[counter];
        if (eventListener.object==this && eventListener.type==type && eventListener.listener==listener) {
            if (type=="DOMContentLoaded") {
                this.detachEvent("onreadystatechange",eventListener.wrapper);
            } else {
                this.detachEvent("on"+type,eventListener.wrapper);
            }
            eventListeners.splice(counter, 1);
            break;
        }
        ++counter;
    }
};
