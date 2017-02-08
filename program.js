// include the Lo-Dash library
var _ = require("lodash");

var worker = function(input) {

  var hot = [];
  var warm = [];

  _.forEach(input, function(values, key) {
    if (_.every(values, value => value > 19)) {
      hot.push(key);
    } else if (_.some(values, value => value > 19)) {
      warm.push(key);
    }
  });

  return {
    hot: hot,
    warm: warm
  };
};

// export the worker function as a nodejs module
module.exports = worker;