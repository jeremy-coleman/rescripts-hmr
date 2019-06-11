module.exports = {
  presets: ['react-app'],
  plugins: [
    ['react-require'],
    ['module-resolver',{
        root: '.',
        alias: {
          '~': './src',
          //'react-dom': '@hot-loader/react-dom'
        }
    }],
    //['react-hot-loader/babel']
  ],
}
