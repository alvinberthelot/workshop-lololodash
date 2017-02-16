// include the Lo-Dash library
var _ = require("lodash");


var myEvery = function(collection, callback) {

}


var worker = function(input) {
    return _.chain(input)
    .map((item) => { return item + 'chained'})
    .map((item) => { return item.toUpperCase()})
    .sortBy()
    .value();
};

// export the worker function as a nodejs module
module.exports = worker;