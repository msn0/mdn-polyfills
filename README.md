# Polyfills copy-pasted from MDN [![Build Status](https://travis-ci.org/msn0/mdn-polyfills.svg?branch=master)](http://travis-ci.org/msn0/mdn-polyfills) [![npm](https://img.shields.io/npm/dt/mdn-polyfills.svg)](https://www.npmjs.com/package/mdn-polyfills) ![dependencies](https://david-dm.org/msn0/mdn-polyfills.svg)

> [MDN](https://developer.mozilla.org) polyfills. A collection of side-effect ECMAScript modules. Minimized, mangled and extremely small thanks to [Rollup](https://rollupjs.org) - next-generation ES6 module bundler.

## Installation

```
npm i mdn-polyfills --save
```

## Polyfills

|name|usage|size [b]|
|----|-----|---:|
|[Object.assign](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill)|`import 'mdn-polyfills/Object.assign'`|274|
|[Object.create](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Polyfill)|`import 'mdn-polyfills/Object.create'`|299|
|[Object.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)|`import 'mdn-polyfills/Object.entries'`|151|
|[Object.values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)|`import 'mdn-polyfills/Object.values'`|142|
|[Array.from](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from?v=control#Polyfill)|`import 'mdn-polyfills/Array.from'`|788|
|[Array.of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of#Polyfill)|`import 'mdn-polyfills/Array.of'`|79|
|[Array.prototype.find](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/find?v=control#Polyfill)|`import 'mdn-polyfills/Array.prototype.find'`|330|
|[Array.prototype.forEach](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach?v=control#Polyfill)|`import 'mdn-polyfills/Array.prototype.forEach'`|328|
|[Array.prototype.filter](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?v=control#Polyfill)|`import 'mdn-polyfills/Array.prototype.filter'`|300|
|[Array.prototype.findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex?v=control#Polyfill)|`import 'mdn-polyfills/Array.prototype.findIndex'`|362|
|[Array.prototype.includes](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/includes?v=control#Polyfill)|`import 'mdn-polyfills/Array.prototype.includes'`|346|
|[Array.prototype.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some#Polyfill)|`import 'mdn-polyfills/Array.prototype.some'`|346|
|[String.prototype.includes](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/includes#Polyfill)|`import 'mdn-polyfills/String.prototype.includes'`|153|
|[String.prototype.repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat#Polyfill)|`import 'mdn-polyfills/String.prototype.repeat'`|504|
|[String.prototype.startsWith](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith#Polyfill)|`import 'mdn-polyfills/String.prototype.startsWith'`|117|
|[String.prototype.endsWith](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith#Polyfill)|`import 'mdn-polyfills/String.prototype.endsWith'`|148|
|[String.prototype.padStart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#Polyfill)|`import 'mdn-polyfills/String.prototype.padStart'`|209|
|[String.prototype.padEnd](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd#Polyfill)|`import 'mdn-polyfills/String.prototype.padEnd'`|205|
|[Function.prototype.bind](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind#Polyfill)|`import 'mdn-polyfills/Function.prototype.bind'`|427|
|[Node.prototype.append](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append#Polyfill)|`import 'mdn-polyfills/Node.prototype.append'`|433|
|[Node.prototype.prepend](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend#Polyfill)|`import 'mdn-polyfills/Node.prototype.prepend'`|452|
|[Node.prototype.before](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before#Polyfill)|`import 'mdn-polyfills/Node.prototype.before'`|440|
|[Node.prototype.after](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/after#Polyfill)|`import 'mdn-polyfills/Node.prototype.after'`|461|
|[Node.prototype.remove](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove#Polyfill)|`import 'mdn-polyfills/Node.prototype.remove'`|290|
|[Node.prototype.replaceWith](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith#Polyfill)|`import 'mdn-polyfills/Node.prototype.replaceWith'`|731|
|[Node.prototype.children](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children#Polyfill)|`import 'mdn-polyfills/Node.prototype.children'`|245|
|[NodeList.prototype.forEach](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill)|`import 'mdn-polyfills/NodeList.prototype.forEach'`|158|
|[Element.prototype.closest](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill)|`import 'mdn-polyfills/Element.prototype.closest'`|386|
|[Element.prototype.toggleAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/toggleAttribute#Polyfill)|`import 'mdn-polyfills/Element.prototype.toggleAttribute'`|243|
|[Element.prototype.matches](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill)|`import 'mdn-polyfills/Element.prototype.matches'`|133|
|[MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent#Polyfill)|`import 'mdn-polyfills/MouseEvent'`|281|
|[CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill)|`import 'mdn-polyfills/CustomEvent'`|279|
|[Number.isNaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#Polyfill)|`import 'mdn-polyfills/Number.isNaN'`|53|


# License

The mdn-polyfills as a module is licensed under MIT © [Michał Jezierski](https://github.com/msn0)<br/>
Polyfills are licensed under https://developer.mozilla.org/en-US/docs/MDN/About#Copyrights_and_licenses
