var river_lerna_module1 = require('river_lerna_module1')

module.exports = {
  test: function(){
    return river_lerna_module1.test() + '_extra'
  }
}
