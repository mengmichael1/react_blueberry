/* */ 
var arrayMap = require('./_arrayMap'),
    basePick = require('./_basePick'),
    flatRest = require('./_flatRest'),
    toKey = require('./_toKey');
var pick = flatRest(function(object, props) {
  return object == null ? {} : basePick(object, arrayMap(props, toKey));
});
module.exports = pick;
