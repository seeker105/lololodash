var _ = require("lodash");

function worker(freelancers){
  var average = _.meanBy(freelancers, 'income')
  var result = {average: average};
  var underperforming = _.filter(freelancers, function(person){
    return person.income <= average;
  })
  console.log(underperforming);
  underperforming = _.sortBy(underperforming, incomeSort);
  result['underperform'] = underperforming;
  var overperforming = _.filter(freelancers, function(person){
    return person.income > average;
  });
  overperforming = _.sortBy(overperforming, incomeSort)
  result['overperform'] = overperforming;
  console.log(result);
  return result;
};

function incomeSort(person){
  return person.income;
}



module.exports = worker;
