var _ = require("lodash");

var worker = function(incoming){
  return _.filter(incoming, {active: true})
};

module.exports = worker;
