const babelrc = require('babelrc-rollup').default;
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');
const rollup = require('rollup').rollup;

const defaultConfig = {
    format: 'iife',
    moduleName: 'Polyfill'
};

function input(entry) {
    return {
        entry,
        plugins: [ babel(babelrc()), uglify() ]
    };
}

function output(dest) {
    return function (bundle) {
        bundle.write(Object.assign({}, defaultConfig, { dest }));
    };
}

rollup(input('./src/Object.assign/index.js')).then(output('./Object.assign.js'));
rollup(input('./src/Object.create/index.js')).then(output('./Object.create.js'));
rollup(input('./src/Array.prototype.find/index.js')).then(output('./Array.prototype.find.js'));
rollup(input('./src/Array.prototype.from/index.js')).then(output('./Array.prototype.from.js'));
rollup(input('./src/Array.prototype.filter/index.js')).then(output('./Array.prototype.filter.js'));
rollup(input('./src/Array.prototype.forEach/index.js')).then(output('./Array.prototype.forEach.js'));
rollup(input('./src/Array.prototype.includes/index.js')).then(output('./Array.prototype.includes.js'));
rollup(input('./src/Array.of/index.js')).then(output('./Array.of.js'));
