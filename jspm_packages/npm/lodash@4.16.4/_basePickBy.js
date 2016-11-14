/* */ 
var baseAssignValue = require('./_baseAssignValue');
function basePickBy(object, props, predicate) {
  var index = -1,
      length = props.length,
      result = {};
  while (++index < length) {
    var key = props[index],
        value = object[key];
    if (predicate(value, key)) {
      baseAssignValue(result, key, value);
    }
  }
  return result;
}
module.exports = basePickBy;
