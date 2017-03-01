const bulk = require('bulk-require')
const Path = require('path')

module.exports = bulk(Path.join(__dirname, '..'), [
  '+(app|browser|client|config|log|pull|service)/**/!(browser|*.test).js'
], { index: false })
