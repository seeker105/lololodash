var _ = require("lodash");

function worker (comments){
  newArray = [];
  groupedComments = _.groupBy(comments, 'username');
  _.forEach(groupedComments, function(group, key){
    count = _.size(group),
    newArray.push({ username: key, comment_count: count})
  });

  result = _.sortBy(newArray, "comment_count").reverse()
  return result


}

module.exports = worker;
