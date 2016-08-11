var _ = require("lodash");

function modifyWord(word){
  word += "chained";
  return word.toUpperCase();
}

function worker(words){
  console.log(words);
  result = _.chain(words)
    .map(modifyWord)
    .sortBy();
  return result;
}

module.exports = worker;
