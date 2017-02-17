// include the Lo-Dash library
var _ = require("lodash");

var worker = function(input) {

  return _.reduce(input, function(acc, freelance, index, collection){
    var numbers = _.map(collection, function(freelance){
      return freelance.income;
    })

    var freelancesSorted = _.sortBy(collection, function(freelance){
      return freelance.income;
    });

    acc.average = averageIncome(numbers);

    acc.underperform = _.filter(freelancesSorted, function(freelance){
      return freelance.income <= acc.average;
    });

    acc.overperform = _.filter(freelancesSorted, function(freelance){
      return freelance.income > acc.average;
    });

    return acc;
  }, {});
};

let averageIncome = function(values){
  return _.reduce(values, function(sum, number, index, collection){
    return (100*sum + (100*number / collection.length))/100;
  }, 0);
}

// export the worker function as a nodejs module
module.exports = worker;