// include the Lo-Dash library
var _ = require("lodash");

var worker = function(input) {
  return _.forEach(input, function(item) {
    switch (true) {
      case (item.population * 1000 > 1000):
        item.size = 'big';
        break;
      case (item.population * 1000 > 500):
        item.size = 'med';
        break;
      default:
        item.size = 'small';
    }
    return item;
  });
};

// export the worker function as a nodejs module
module.exports = worker;