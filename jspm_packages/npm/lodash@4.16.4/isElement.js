/* */ 
var isObjectLike = require('./isObjectLike'),
    isPlainObject = require('./isPlainObject');
function isElement(value) {
  return value != null && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
}
module.exports = isElement;
