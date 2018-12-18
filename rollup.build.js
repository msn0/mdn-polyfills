const babelrc = require('babelrc-rollup').default;
const babel = require('rollup-plugin-babel');
const { uglify } = require('rollup-plugin-uglify');
const rollup = require('rollup').rollup;

const defaultConfig = {
    format: 'iife',
    name: 'Polyfill',
    strict: false
};

function input(input) {
    return {
        input,
        plugins: [ babel(babelrc()), uglify() ]
    };
}

function output(file) {
    return function (bundle) {
        bundle.write(Object.assign({}, defaultConfig, { file }));
    };
}

rollup(input('./src/Object.assign/index.js')).then(output('./Object.assign.js'));
rollup(input('./src/Object.create/index.js')).then(output('./Object.create.js'));
rollup(input('./src/Object.entries/index.js')).then(output('./Object.entries.js'));
rollup(input('./src/Object.values/index.js')).then(output('./Object.values.js'));
rollup(input('./src/Array.prototype.find/index.js')).then(output('./Array.prototype.find.js'));
rollup(input('./src/Array.from/index.js')).then(output('./Array.from.js'));
rollup(input('./src/Array.prototype.fill/index.js')).then(output('./Array.prototype.fill.js'));
rollup(input('./src/Array.prototype.filter/index.js')).then(output('./Array.prototype.filter.js'));
rollup(input('./src/Array.prototype.findIndex/index.js')).then(output('./Array.prototype.findIndex.js'));
rollup(input('./src/Array.prototype.forEach/index.js')).then(output('./Array.prototype.forEach.js'));
rollup(input('./src/Array.prototype.includes/index.js')).then(output('./Array.prototype.includes.js'));
rollup(input('./src/Array.prototype.some/index.js')).then(output('./Array.prototype.some.js'));
rollup(input('./src/Array.of/index.js')).then(output('./Array.of.js'));
rollup(input('./src/String.prototype.repeat/index.js')).then(output('./String.prototype.repeat.js'));
rollup(input('./src/String.prototype.startsWith/index.js')).then(output('./String.prototype.startsWith.js'));
rollup(input('./src/String.prototype.endsWith/index.js')).then(output('./String.prototype.endsWith.js'));
rollup(input('./src/String.prototype.padStart/index.js')).then(output('./String.prototype.padStart.js'));
rollup(input('./src/String.prototype.padEnd/index.js')).then(output('./String.prototype.padEnd.js'));
rollup(input('./src/String.prototype.includes/index.js')).then(output('./String.prototype.includes.js'));
rollup(input('./src/String.prototype.trim/index.js')).then(output('./String.prototype.trim.js'));
rollup(input('./src/Function.prototype.bind/index.js')).then(output('./Function.prototype.bind.js'));
rollup(input('./src/Node.prototype.append/index.js')).then(output('./Node.prototype.append.js'));
rollup(input('./src/Node.prototype.prepend/index.js')).then(output('./Node.prototype.prepend.js'));
rollup(input('./src/Node.prototype.before/index.js')).then(output('./Node.prototype.before.js'));
rollup(input('./src/Node.prototype.after/index.js')).then(output('./Node.prototype.after.js'));
rollup(input('./src/Node.prototype.remove/index.js')).then(output('./Node.prototype.remove.js'));
rollup(input('./src/Node.prototype.replaceWith/index.js')).then(output('./Node.prototype.replaceWith.js'));
rollup(input('./src/Node.prototype.children/index.js')).then(output('./Node.prototype.children.js'));
rollup(input('./src/NodeList.prototype.forEach/index.js')).then(output('./NodeList.prototype.forEach.js'));
rollup(input('./src/Element.prototype.closest/index.js')).then(output('./Element.prototype.closest.js'));
rollup(input('./src/Element.prototype.toggleAttribute/index.js')).then(output('./Element.prototype.toggleAttribute.js'));
rollup(input('./src/Element.prototype.matches/index.js')).then(output('./Element.prototype.matches.js'));
rollup(input('./src/Element.prototype.classList/index.js')).then(output('./Element.prototype.classList.js'));
rollup(input('./src/MouseEvent/index.js')).then(output('./MouseEvent.js'));
rollup(input('./src/CustomEvent/index.js')).then(output('./CustomEvent.js'));
rollup(input('./src/Number.isInteger/index.js')).then(output('./Number.isInteger.js'));
rollup(input('./src/Number.isNaN/index.js')).then(output('./Number.isNaN.js'));
rollup(input('./src/HTMLCanvasElement.prototype.toBlob/index.js')).then(output('HTMLCanvasElement.prototype.toBlob.js'));
