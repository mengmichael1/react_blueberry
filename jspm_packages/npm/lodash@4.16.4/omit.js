/* */ 
var arrayMap = require('./_arrayMap'),
    baseDifference = require('./_baseDifference'),
    basePick = require('./_basePick'),
    flatRest = require('./_flatRest'),
    getAllKeysIn = require('./_getAllKeysIn'),
    toKey = require('./_toKey');
var omit = flatRest(function(object, props) {
  if (object == null) {
    return {};
  }
  props = arrayMap(props, toKey);
  return basePick(object, baseDifference(getAllKeysIn(object), props));
});
module.exports = omit;
