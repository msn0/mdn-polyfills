export default function replaceWith() {
    var parent = this.parentNode, i = arguments.length, currentNode;
    if (!parent) {
        return;
    }
    if (!i) {// if there are no arguments
        parent.removeChild(this);
    }

    while (i--) { // i-- decrements i and returns the value of i before the decrement
        currentNode = arguments[i];
        if (typeof currentNode !== 'object') {
            currentNode = this.ownerDocument.createTextNode(currentNode);
        } else if (currentNode.parentNode) {
            currentNode.parentNode.removeChild(currentNode);
        }
        // the value of "i" below is after the decrement
        if (!i) {// if currentNode is the first argument (currentNode === arguments[0])
            parent.replaceChild(currentNode, this);
        } else {// if currentNode isn't the first
            parent.insertBefore(this.previousSibling, currentNode);
        }
    }
}
