export default function append() {
    var argArr = Array.prototype.slice.call(arguments),
        docFrag = document.createDocumentFragment();

    argArr.forEach(function (argItem) {
        var isNode = argItem instanceof Node;
        docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
    });

    this.appendChild(docFrag);
};
