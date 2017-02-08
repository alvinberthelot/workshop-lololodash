// include the Lo-Dash library
var _ = require("lodash");

var worker = function(input) {

  return _.template(`Hello ${input.name} (logins: ${input.login.length})`)(input);
};

// export the worker function as a nodejs module
module.exports = worker;