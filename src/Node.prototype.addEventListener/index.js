import addEventListener from './addEventListener';
import removeEventListener from './removeEventListener';

// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

// Adds addEventListener and removeEventListener to DOM nodes
(function(constructor) {
    if (!Event.prototype.preventDefault) {
        Event.prototype.preventDefault=function() {
            this.returnValue=false;
        };
    }
    if (!Event.prototype.stopPropagation) {
        Event.prototype.stopPropagation=function() {
            this.cancelBubble=true;
        };
    }
    if (constructor &&
        constructor.prototype &&
        constructor.prototype.addEventListener == null) {
        var eventListeners=[];

        constructor.prototype.addEventListener=addEventListener;
        constructor.prototype.removeEventListener=removeEventListener;
        if (HTMLDocument) {
            HTMLDocument.prototype.addEventListener=addEventListener;
            HTMLDocument.prototype.removeEventListener=removeEventListener;
        }
        if (Window) {
            Window.prototype.addEventListener=addEventListener;
            Window.prototype.removeEventListener=removeEventListener;
        }
    }
})(window.Node || window.Element);