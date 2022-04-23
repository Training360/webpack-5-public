const {resolve} = require('path')

module.exports = {
  entry: {
    main: resolve(__dirname, 'src/main.js')
  },
  output: {
    path: resolve(__dirname, 'public')
  }
}