module.exports = {
    filenameHashing: false,
    productionSourceMap: false,
    chainWebpack: config => {
        config.optimization.delete('splitChunks')
    },
    pages: {
        index: {
            entry: 'src/main.js'
        },
        background: {
            entry: 'src/background.js',
            chunks: []
        }
    }
}
