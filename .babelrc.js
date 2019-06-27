
const createTildifyConfig = dir => ({
  "~": `./${dir}`,
  //"@unused":`./${dir}/@unused`
})

const TILDIFY_CONFIG = createTildifyConfig('src')

module.exports = {
  presets: ['react-app'],
  plugins: [
    ['babel-plugin-react-require'],
    ['babel-plugin-module-resolver', {
        root: '.',
        alias: TILDIFY_CONFIG
        // {
        //   '~': './src'
        // }
    }]
  ],
}
