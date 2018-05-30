const sizeOf = require('image-size')

module.exports = function (content) {
  const size = sizeOf(Buffer.from(content))
  return `module.exports = ${JSON.stringify(size)}`
}
module.exports.raw = true
