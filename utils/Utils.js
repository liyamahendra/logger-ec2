var _ = require("lodash");

var Utils = {
	isNullOrEmpty: function(valueToCheck) {
		return (valueToCheck == "undefined" || valueToCheck === undefined || _.isEmpty(valueToCheck) || _.isNil(valueToCheck)) && !_.isFunction(valueToCheck);
	}
};

module.exports = Utils;
