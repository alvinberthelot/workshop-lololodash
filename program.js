// include the Lo-Dash library
var _ = require("lodash");

var worker = function(user) {
    return _.template('Hello <%= name %> (logins: <%= logins %>)')
                    ({name: user.name, logins: user.login.length});
};

// export the worker function as a nodejs module
module.exports = worker;