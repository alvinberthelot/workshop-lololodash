// include the Lo-Dash library
var _ = require("lodash");

var worker = function(input) {

  return _.chain(input)
    .map(item => item + 'chained')
    .map(item => item.toUpperCase())
    .sortBy(item => item)
    .value();
};

// export the worker function as a nodejs module
module.exports = worker;