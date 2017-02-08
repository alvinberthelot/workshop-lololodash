// include the Lo-Dash library
var _ = require("lodash");

var worker = function(input) {
  return _.sortBy(input, 'quantity').reverse();
};

// export the worker function as a nodejs module
module.exports = worker;