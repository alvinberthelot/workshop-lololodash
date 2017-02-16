// include the Lo-Dash library
var _ = require("lodash");

var worker = function(input) {
    return _.forEach(input, function(value, key) {
       if(value.population < 0.5) {
          value.size = "small";
       } else if(value.population < 1) {
          value.size = "med";
       } else {
          value.size = "big";
       }
    });
};

// export the worker function as a nodejs module
module.exports = worker;