var _ = require('lodash');

function worker(data){
  var personName = data.name;
  var loginCount = data.login.length;
  return _.template('Hello <%= name %> (logins: <%= count %>)')({name: personName, count: loginCount});
}

module.exports = worker;
