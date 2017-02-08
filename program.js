// include the Lo-Dash library
var _ = require("lodash");

var worker = function(input) {

  return _.chain(input)
    .groupBy('article')
    .map((command, key) => {
      return {
        article: +key,
        total_orders: _.reduce(command, (sum, item) => sum + item.quantity, 0)
      }
    })
    .sortBy('total_orders')
    .reverse()
    .value();
};

// export the worker function as a nodejs module
module.exports = worker;