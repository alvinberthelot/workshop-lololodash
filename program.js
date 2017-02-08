// include the Lo-Dash library
var _ = require("lodash");

var worker = function(input) {


  var underperform = [];
  var overperform = [];

  var average = _.reduce(input, (sum, freelancer, index, collection) => {
    return sum + freelancer.income;
  }, 0) / input.length;

  function betterThanAverage(average, freelance) {
    return freelance.income > average;
  }

  _.forEach(input, freelance => {
    if (betterThanAverage(average, freelance)) {
      overperform.push(freelance);
    } else {
      underperform.push(freelance);
    }
  })

  var underperformSorted = _.sortBy(underperform, 'income');
  var overperformSorted = _.sortBy(overperform, 'income');

  return {
    average: average,
    underperform: underperformSorted,
    overperform: overperformSorted
  };
};

// export the worker function as a nodejs module
module.exports = worker;