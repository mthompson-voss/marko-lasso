const template = require('./template.marko')

module.exports = function (req, res) {
  template.render({
    name: 'Michael',
    colors: ['red', 'green', 'yellow']
  }, res)
}
