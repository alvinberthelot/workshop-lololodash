// include the Lo-Dash library
var _ = require("lodash");

var worker = function(input) {
    let result = {};
    result.hot = [];
    result.warm = [];

    _.forEach(input, function(temperatures, cityname) {
      if(_.every(temperatures, function(temperature) {
          return temperature > 19;
      })) {
        result.hot.push(cityname);
      } else if (_.some(temperatures, function(temperature) {
          return temperature > 19;
      })) {
        result.warm.push(cityname);
      }
    });

    return result;
};

// export the worker function as a nodejs module
module.exports = worker;