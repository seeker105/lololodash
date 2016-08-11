var _ = require("lodash");

function calculateTotalOrders(incomingCollection){
  var resultArray = [];
  groupedCollection = _.groupBy(incomingCollection, 'article');

  _.forEach(groupedCollection, function (eachValue, key) {
    key = parseInt(key,10);
    var total = 0;
    total = _.reduce(eachValue, function (sum, eachValue) {
      return sum + eachValue.quantity;
    }, 0);
    resultArray.push({article: key, total_orders: total});
  });

  result =  _.sortBy(resultArray, 'total_quantity').reverse();
  return result;
}

var worker = function (beginningCollection) {
  result = calculateTotalOrders(beginningCollection);
  return result;
};

module.exports = worker;
