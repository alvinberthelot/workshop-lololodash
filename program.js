 // include the Lo-Dash library
    var _ = require("lodash");

    var worker = function(list) {
        return _.chain(list)
        .groupBy('username')
        .reduce(function(acc, value, key){

          var tab = {
            'username':key,
            'comment_count':_.size(value)
          };

          acc.push(tab);
          return acc;

        }, [])
        .sortBy('comment_count').reverse()
        .value();
    };
    // export the worker function as a nodejs module
    module.exports = worker;