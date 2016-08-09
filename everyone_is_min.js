var _ = require("lodash");

function worker(collection) {
  result = {
    hot: [],
    warm: [],
  };
  _.forEach(collection, function (item, key){
    if (_.every(item, function(element) {return element > 19 })) {
      result.hot.push(key);
    } else if (_.some(item, function(element) {return element > 19 })) {
      result.warm.push(key);
    }
  })
  return result;
}

module.exports = worker;
