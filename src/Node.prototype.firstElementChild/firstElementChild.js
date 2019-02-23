export default function () {
  var node, nodes = this.childNodes, i = 0;
  while (node = nodes[i++]) {
    if (node.nodeType === 1) {
      return node;
    }
  }
  return null;
}
