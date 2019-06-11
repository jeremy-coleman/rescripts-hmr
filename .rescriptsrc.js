var fs = require('fs')

// module.exports = [
//   ['use-babel-config', '.babelrc.js'],
//   ['use-eslint-config', '.eslintrc.js'],
//   Object.assign(
//     config => {
//       config.resolve.alias = {
//         'react-dom': '@hot-loader/react-dom'
//       }
//       console.log('middleware')
//       return config
//     },
//     {isMiddleware: true},
//   ),
// ]


module.exports = [
  ['use-babel-config', '.babelrc.js'],
  ['use-eslint-config', '.eslintrc.js'],
  Object.assign(
    config => {
      // config.resolve.alias = {
      //   'react-dom': '@hot-loader/react-dom'
      // }
      return config
    },
    {isMiddleware: true},
  ),
]
