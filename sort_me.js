var _ = require("lodash");

var worker = function(theArray){
  return _.sortBy(theArray, function(element){
    return -element.quantity;
  })
};

module.exports = worker;
