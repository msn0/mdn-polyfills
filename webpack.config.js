module.exports = {
    entry: {
        'Object.assign': './src/Object.assign/index.js',
        'Object.create': './src/Object.create/index.js',
        'Array.prototype.find': './src/Array.prototype.find/index.js',
        'Array.prototype.from': './src/Array.prototype.from/index.js',
        'Array.prototype.filter': './src/Array.prototype.filter/index.js',
        'Array.prototype.forEach': './src/Array.prototype.forEach/index.js',
        'Array.prototype.includes': './src/Array.prototype.includes/index.js',
        'Array.of': './src/Array.of/index.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    }
};
