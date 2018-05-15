export default function() {
    var i = 0, node, nodes = this.childNodes, children = [];
    while (node = nodes[i++]) {
        if (node.nodeType === 1) {
            children.push(node);
        }
    }
    return children;
}
