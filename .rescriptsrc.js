const remarkHighlight = require('remark-highlight.js')
const Prism = require('./prism')

const getBabelLoader = config => {
  const babelLoaderFilter = rule =>
    rule.loader &&
    rule.loader.includes("babel") &&
    rule.options &&
    rule.options.plugins;

  // First, try to find the babel loader inside the oneOf array.
  // This is where we can find it when working with react-scripts@2.0.3.
  let loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf))
    .oneOf;

  let babelLoader = loaders.find(babelLoaderFilter);

  // If the loader was not found, try to find it inside of the "use" array, within the rules.
  // This should work when dealing with react-scripts@2.0.0.next.* versions.
  if (!babelLoader) {
    loaders = loaders.reduce((ldrs, rule) => ldrs.concat(rule.use || []), []);
    babelLoader = loaders.find(babelLoaderFilter);
  }
  return babelLoader;
};

module.exports = [
  ['use-babel-config', '.babelrc.js'],
  ['use-eslint-config', '.eslintrc.js'],
  Object.assign(
    config => {
      const babelLoader = getBabelLoader(config)
      config.resolve.alias = {
        'react-dom': '@hot-loader/react-dom'
      }
      
      //config.resolve.extensions = [".ts", ".tsx", ".js",".jsx",".json",".md",".mdx",".wasm"]

      config.module.rules.map(rule => {
        if (typeof rule.test !== 'undefined' || typeof rule.oneOf === 'undefined') {
          return rule
        }
    
        rule.oneOf.unshift({
          test: /\.md$/,
          use: [
            {
                loader: "html-loader"
            },
            {
              loader: "markdown-loader",
              options: {
                highlight(code, lang) {
                  if (!lang) {
                    lang = 'jsx'
                  }
                  return Prism.highlight(code, Prism.languages[lang], lang);
                },
                smartypants: true,
              }
            }
          ]
        })
    
        rule.oneOf.unshift({
          test: /\.mdx$/,
          // include: babelLoader.include,
          use: [
            {
              loader: babelLoader.loader,
              options: babelLoader.options
            },
            {
              loader: '@mdx-js/loader',
              options: {
                mdPlugins: [remarkHighlight]
              }
            }
          ]
        })
    
        return rule
      })

      return config
    },
    {isMiddleware: true},
  ),
]
