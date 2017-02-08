// include the Lo-Dash library
var _ = require("lodash");

var worker = function(input) {

  return _.chain(input)
    .groupBy('username')
    .map((user, key) => {
      return {
        username: key,
        comment_count: _.size(user)
      }
    })
    .sortBy('comment_count')
    .reverse()
    .value();
};

// export the worker function as a nodejs module
module.exports = worker;