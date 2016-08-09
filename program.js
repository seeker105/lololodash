var _ = require("lodash");

var theArray = [
    { id: 22, username: "martin", active: true},
    { id: 23, username: "max",    active: false},
    { id: 24, username: "linda",  active: false}
];

var worker = function( incoming ){
  _.filter.characters(incoming, 'active': true)
};

module.exports = worker;
